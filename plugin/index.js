const pluginName = 'MyPlugin';

class MyPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log('plugin构建开始');
    });
  }
}

module.exports = MyPlugin;
