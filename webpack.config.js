module.exports = function(env) {
 if (!env) {
   throw new Error("Env is required")
 }
 return require(`./webpack.config.${env}.js`)
}