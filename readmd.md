1. Complier 对象代表了完整的webpack的环境配置。
2. Complier.run() -> Compliation 对象代表了一次资源版本构建。
3. Compilation 对象也提供了很多关键步骤的回调，带来了一次版本的chunk。
4. Compilation.buildModule -> loader -> chunk。
5. Parser -> Dependency (负责处理依赖)。
6. Template自带的代码模板直接生成最后的解析结果。
7. Compiler / Compilation都继承Tapable