import common from '@/util/common'
/**
 * 下拉加载
 * 在created生命周期里面调用handleScroll函数,调用组件方法对象必须包含this.getData函数，在请求接口完成后执行
 * this.isRequest = true
 * this.page = res.page
 */
let handleScroll = {
  data () {
    return {
      page: {}, // 分页数据
      currPage: 1, // 页数
      isRequest: false // 防止重复请求
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (e) { // 监听滚动函数处理
      if (window.pageYOffset === 0) return
      let [scrollY, innerHeight, scrollHeight] = [window.pageYOffset, window.innerHeight, window.document.body.scrollHeight]
      let height = common.add(scrollY, innerHeight)
      if ((parseInt(height) >= parseInt(scrollHeight - 200)) && this.isRequest) {
        this.currPage++
        this.isRequest = false
        if (this.currPage <= this.page.pageCount) this.getData()
      }
    }
  }
}

export {
  handleScroll
}
