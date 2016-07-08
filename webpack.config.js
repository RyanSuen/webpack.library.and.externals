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
        library: 'ryansuen'    //������������õ��ļ���ֵ��ryansuen,  var ryansuen = (/*����ļ�*/);
    },
    externals: [

        /*
        * ��externals�б������key/value���ᱻ���
        * ��������Ҫ��ҳ��������Щ�ⲿ��
        * string1��ʾ��webpack require���ļ���nodeģ�飬��require('jquery')��require('./build/lib/jquery.min.js')
        * string2��ʾ��Щ�ⶨ��Ŀ������jquery��jQuery����($)����underscore��_����(�»��߶���),ע��string2����Ϳⶨ��Ķ��󱣳�һ�¡�
        * */
        {
            "string1": "string2"
        },
        {
            "jquery": "jQuery"    //jqueryΪnodeģ�飬  jQueryΪ�ⶨ��Ķ���
        },
        {
            "underscore": '_'    //underscoreΪnodeģ�飬 _Ϊ�ⶨ��Ķ���
        }
    ]
};

module.exports = config;