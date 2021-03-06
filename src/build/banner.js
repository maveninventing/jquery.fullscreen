/*
 * <%= pkg.name %> v<%= pkg.version %>
 * https://github.com/private-face/jquery.fullscreen
 *
 * Copyright (c) 2012–<%= grunt.template.today("yyyy") %> Vladimir Zhuravlev
 * Released under the MIT license
 * https://github.com/private-face/jquery.fullscreen/blob/master/LICENSE
 *
 * Date: <%= grunt.template.today("yyyy-mm-dd") %>
 **/
(function(global, factory) {
	// CommonJS/Browserify
	if (typeof exports === 'object') {
		factory(require('jquery'));
	// Global
	} else {
		factory(global.jQuery);
	}
}(this, function($) {
