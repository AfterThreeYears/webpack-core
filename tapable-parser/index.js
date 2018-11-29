const {
  // 同步的串行，不关心监听函数的返回值
  SyncHook,
  // 同步的串行，只要有一个监听函数的返回值不为null，就跳过接下来剩下的所有
  SyncBailHook,
  // 同步的串行, 上一个的监听函数回调的参数，可以传给下一个监听的函数
  SyncWaterfallHook,
  // 同步循环 监听函数返回true，循环执行
  SyncLoopHook,
  AsyncParallelHook,
  AsyncParallelBailHook,
  AsyncSeriesHook,
  AsyncSeriesBailHook,
  AsyncSeriesWaterfallHook,
} = require('tapable');

let queue = new SyncBailHook(['name']);

queue.tap('1', (name, name1) => {
  console.log('name is：', name)
});

queue.tap('2', (name, name1) => {
  console.log('name is：', name, 'name1 is：', name1)
});

queue.call('webpack')

