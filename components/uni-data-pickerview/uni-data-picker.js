class DataPicker {

  constructor() {
    this._treeData = []
    this._dataList = []
    this._selected = []
    this._selectedIndex = 0
    this._value = []
    this._localdata = []
    this._loading = false
    this._isLocaldata = false

    this._preload = true
    this._isLeaf = false
    this._collection = ''
    this._field = ''
    this._where = ''
    this._orderby = ''
    this._stepSearh = true
    this._selfField = ''
    this._parentField = ''
  }

  get treeData() {
    return this._treeData
  }
  set treeData(value) {
    this._treeData = value
  }

  get dataList() {
    return this._dataList
  }
  set dataList(value) {
    this._dataList = value
  }

  get selected() {
    return this._selected
  }
  set selected(value) {
    this._selected = value
  }

  get selectedIndex() {
    return this._selectedIndex
  }
  set selectedIndex(value) {
    this._selectedIndex = value
  }

  get loading() {
    return this._loading
  }
  set loading(value) {
    this._loading = value
    this.onloading(value)
  }

  get isLocaldata() {
    return this._isLocaldata.length
  }

  get localdata() {
    return this._treeData
  }
  set localdata(value) {
    this._isLocaldata = true
    this._treeData = []
    this._extractTree(value, this._treeData, null)
  }

  get preload() {
    return this._preload
  }
  set preload(value) {
    this._preload = value
  }

  get isLeaf() {
    return this._isLeaf
  }

  get value() {
    return this._value
  }
  set value(value) {
    this._value = value
    // this._selected = new Array(value.length)
    // for (var i = 0; i < value.length; i++) {
    //   this._selected[i] = {
    //     value: value[i]
    //   }
    // }
  }
  set formatValue(value) {
    var dl = new Array(value.length)
    for (let i = 0; i < dl.length; i++) {
      dl[i] = value[i].value
    }
    this._value = dl
  }

  get collection() {
    return this._collection
  }
  set collection(value) {
    this._collection = value
  }

  get field() {
    return this._field
  }
  set field(value) {
    this._field = value
  }

  get where() {
    return this._where
  }
  set where(value) {
    this._where = value
  }

  get orderby() {
    return this._orderby
  }
  set orderby(value) {
    this._orderby = value
  }

  get stepSearh() {
    return this._stepSearh
  }
  set stepSearh(value) {
    this._stepSearh = value
  }

  get selfField() {
    return this._selfField
  }
  set selfField(value) {
    this._selfField = value
  }

  get parentField() {
    return this._parentField
  }
  set parentField(value) {
    this._parentField = value
  }

  get postField() {
    return `${this.field}, ${this.parentField} as parent_value`
  }

  get postWhere() {
    let result = []
    let selected = this.selected
    result.push(`${this.parentField} == null`)
    if (selected.length) {
      for (var i = 0; i < selected.length - 1; i++) {
        result.push(`${this.parentField} == '${selected[i].value}'`)
      }
    }

    if (this.where) {
      return `(${this.where}) && (${result.join(' || ')})`
    }

    return result.join(' || ')
  }

  get nodeWhere() {
    let result = []
    let selected = this.selected
    if (selected.length) {
      result.push(`${this.parentField} == '${selected[selected.length - 1].value}'`)
    }

    if (this.where) {
      return `(${this.where}) && (${result.join(' || ')})`
    }

    return result.join(' || ')
  }

  getTreePath(callback) {
    if (this.loading) {
      return
    }
    this.loading = true

    let exec = uniCloud.database().collection(this.collection)

    if (this.where) {
      exec = exec.where(this.where)
    }
    if (this.postField) {
      exec = exec.field(this.postField)
    }

    const startWith = `${this.selfField}=='${this.value}'`

    exec.get({
      getTreePath: {
        limitLevel: 10,
        startWith
      }
    }).then((res) => {
      this.loading = false
      let treePath = []
      this._extractTreePath(res.result.data, treePath)
      this._selected = treePath
      this.formatValue = treePath
      callback(this._selected)
    }).catch((err) => {
      this.loading = false
      this.onerror(err)
    })
  }

  loadData(callback) {
    if (this.localdata.length) {
      this._updateBindData()
      this.onchange(null)
      return
    }

    if (!this.stepSearh) {
      this._loadAllData((data) => {
        this._treeData = []
        this._extractTree(data, this._treeData, null)
        this._updateBindData()
        this.onchange(null)
      })
      return
    }

    if (this.value.length) {
      this._loadNodeData((data) => {
        this._treeData = data
        this._updateBindData()
        this._updateSelected()
        this.onchange(null)
        callback && callback()
      })
      return
    }

    this._loadNodeData((data) => {
      this._treeData = data
      this._updateBindData()
      this.onchange(null)
    })
  }

  selectedNode(i, j) {
    const node = this._dataList[i][j]
    const {
      value,
      text
    } = node

    if (i < this.selected.length - 1) {
      this.selected.splice(i, this.selected.length - i)
      this.selected.push(node)
    } else if (i === this.selected.length - 1) {
      this.selected[i] = node
    }

    if (node.isLeaf) {
      this.onchange(node, node.isLeaf)
      return
    }

    const {
      isLeaf,
      hasNodes
    } = this._updateBindData()

    if (this.isLocaldata && (!hasNodes || isLeaf)) {
      this.onchange(node, isLeaf)
      return
    }

    if (!isLeaf && !hasNodes) {
      this._loadNodeData((data) => {
        if (!data.length) {
          node.isLeaf = true
        } else {
          this._treeData.push(...data)
          this._updateBindData(node)
        }
        this.onchange(node, node.isLeaf)
      }, this.nodeWhere)
      return
    }

    this.onchange(node, false)
  }

  reset() {
    this._treeData = []
    this._dataList = []
    this._selected = []
    this._selectedIndex = 0
    this._value = []
    this._loading = false
  }

  _updateSelected() {
    var dl = this._dataList
    var sl = this._selected
    for (var i = 0; i < sl.length; i++) {
      var value = sl[i].value
      var dl2 = this._dataList[i]
      for (var j = 0; j < dl2.length; j++) {
        var item2 = dl2[j]
        if (item2.value === value) {
          sl[i].text = item2.text
          break
        }
      }
    }
  }

  _loadAllData(callback) {
    if (this.loading) {
      return
    }
    this.loading = true

    let exec = uniCloud.database().collection(this.collection)

    if (this.where) {
      exec = exec.where(this.where)
    }
    if (this.postField) {
      exec = exec.field(this.postField)
    }
    if (this.orderby) {
      exec = exec.orderBy(this.orderby)
    }

    exec.get({
      getTree: true
    }).then((res) => {
      this.loading = false
      callback(res.result.data)
    }).catch((err) => {
      this.loading = false
      this.onerror(err)
    })
  }

  _loadNodeData(callback, pw) {
    if (this.loading) {
      return
    }
    this.loading = true

    let exec = uniCloud.database().collection(this.collection)

    let where = pw || this.postWhere
    if (where) {
      exec = exec.where(where)
    }
    if (this.postField) {
      exec = exec.field(this.postField)
    }
    if (this.orderby) {
      exec = exec.orderBy(this.orderby)
    }

    exec.get().then((res) => {
      this.loading = false
      callback(res.result.data)
    }).catch((err) => {
      this.loading = false
      this.onerror(err)
    })
  }

  _updateBindData(node) {
    const {
      dataList,
      hasNodes
    } = this._filterData(this._treeData, this.selected)

    let isLeaf = this._stepSearh === false && !hasNodes

    if (node) {
      node.isLeaf = isLeaf
    }

    this._dataList = dataList
    this._selectedIndex = dataList.length - 1

    if (!isLeaf && this._selected.length < dataList.length) {
      this.selected.push({
        value: null,
        text: "请选择"
      })
    }

    return {
      isLeaf,
      hasNodes
    }
  }

  _filterData(data, paths) {
    let dataList = []

    let hasNodes = true

    dataList.push(data.filter((item) => {
      return item.parent_value === undefined
    }))
    for (let i = 0; i < paths.length; i++) {
      var value = paths[i].value
      var nodes = data.filter((item) => {
        return item.parent_value === value
      })

      if (nodes.length) {
        dataList.push(nodes)
      } else {
        hasNodes = false
      }
    }

    return {
      dataList,
      hasNodes
    }
  }

  _extractTree(nodes, result, parent_value) {
    let list = result || []
    for (let i = 0; i < nodes.length; i++) {
      let node = nodes[i]

      let child = {}
      for (let key in node) {
        if (key !== 'children') {
          child[key] = node[key]
        }
      }
      if (parent_value !== null) {
        child.parent_value = parent_value
      }
      result.push(child)

      let children = node.children
      if (children) {
        this._extractTree(children, result, node.value)
      }
    }
  }

  _extractTreePath(nodes, result) {
    let list = result || []
    for (let i = 0; i < nodes.length; i++) {
      let node = nodes[i]

      let child = {}
      for (let key in node) {
        if (key !== 'children') {
          child[key] = node[key]
        }
      }
      result.push(child)

      let children = node.children
      if (children) {
        this._extractTreePath(children, result)
      }
    }
  }

  onloading(e) {}
  onchange(e) {}
  onerror(e) {}
}

DataPicker.Properties = ['value', 'localdata', 'preload', 'stepSearh', 'selfField', 'parentField', 'collection',
  'field', 'where', 'orderby'
]

export default DataPicker
