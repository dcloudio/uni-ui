
const attrs = [
  'localdata',
  'collection',
  'action',
  'field',
  'getcount',
  'orderby',
  'where',
  'value'
]

export default {
  props: {
    value: {
      type: [Array, String, Number],
      default () {
        return []
      }
    },
    localdata: {
      type: Array,
      default () {
        return []
      }
    },
    preload: {
      type: Boolean,
      default: true
    },
    stepSearh: {
      type: Boolean,
      default: true
    },
    selfField: {
      type: String,
      default: ''
    },
    parentField: {
      type: String,
      default: ''
    },
    array2tree: {
      type: Boolean,
      default: false
    },
    collection: {
      type: String,
      default: ''
    },
    field: {
      type: String,
      default: ''
    },
    where: {
      type: String,
      default: ''
    },
    orderby: {
      type: String,
      default: ''
    }
  },
  computed: {
    isLocalData() {
      return this.localdata.length > 0
    }
  },
  data() {
    return {
      loading: false,
      loadMore: {
        contentdown: '',
        contentrefresh: '',
        contentnomore: ''
      },
      errorMessage: ''
    }
  },
  created() {
    this._attrs = attrs
  },
  methods: {}
}
