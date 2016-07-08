/**
 * Created by sun yi on 2016/7/8.
 */

var webpack = require('webpack'),
    path = require('path');

var config = {
    entry: {
        build1: path.resolve(__dirname, 'build/js/a.js'),
        build2: path.resolve(__dirname, 'build/js/b.js'),
        build3: [path.resolve(__dirname, 'build/js/c.js'), path.resolve(__dirname, 'build/js/d.js')]
    },
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: '[name].bundle.js',
        libraryTarget: 'var',
        library: 'ryansuen'    //库名，将打包好的文件赋值给ryansuen,  var ryansuen = (/*打包文件*/);
    },
    externals: [

        /*
        * 在externals中被定义的key/value不会被打包
        * 所以我们要在页面引入这些外部库
        * string1表示被webpack require的文件或node模块，如require('jquery')或require('./build/lib/jquery.min.js')
        * string2表示那些库定义的库对象，如jquery的jQuery对象($)，或underscore的_对象(下划线对象),注意string2必须和库定义的对象保持一致。
        * */
        {
            "string1": "string2"
        },
        {
            "jquery": "jQuery"    //jquery为node模块，  jQuery为库定义的对象
        },
        {
            "underscore": '_'    //underscore为node模块， _为库定义的对象
        }
    ]
};

module.exports = config;