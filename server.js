let express = require('express');
let app = express();
let Vue = require('vue');
let fs = require('fs');
let path = require('path');
let VueServerRender = require('vue-server-renderer');

let serverBundle = require('./dist/vue-ssr-server-bundle.json');
let clientManifest = require('./dist/vue-ssr-client-manifest.json');
let temlate = fs.readFileSync('./public/index.ssr.html', 'utf8');

let render = VueServerRender.createBundleRenderer(serverBundle, {
    temlate,
    clientManifest
});

app.get('/', (req, res) => {
    let context =  { url: req.url };

    render.renderToString(context, (err, html) => {
        console.log(err);
        res.send(html);
    });
})

// 顺序 要保证
app.use(express.static(path.resolve(__dirname,'dist')));

app.get('*',(req,res)=>{
    // 把渲染成功的字符串扔给客户端,只是返回一个字符串 并没有vue实际功能
    let context = {url:req.url};
    render.renderToString(context,(err,html)=>{
        res.send(html);
    });
});

app.listen(4000);