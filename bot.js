//npm i --save cheerio request
var Crawler = {
	request : null,
	cheerio : null,
	fs      : null,
	init : function(){
		Crawler.request = require('request');
		Crawler.cheerio = require('cheerio');
		Crawler.fs      = require('fs');
		Crawler.getData();
	},
	getData: function(){
		Crawler.request('http://Yourlink', function(err, res, body){
			if(err)
				console.log('Error: ' + err);
			var $ = Crawler.cheerio.load(body);
			$('.class to find other class').each(function(){
				var title  = $(this).find('.class to find').text().trim();
				var content = $(this).find('.class to find').text().trim();
				console.log('result :'+ title + ' - ' + content);
				Crawler.fs.appendFile('result.txt', title + ' - ' + content + '\n');
			});
		});
	}
};
Crawler.init();
