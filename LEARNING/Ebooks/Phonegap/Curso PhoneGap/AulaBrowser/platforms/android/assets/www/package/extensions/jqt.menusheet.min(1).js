!function(a){function b(b){var c=a(this),d=a(this).data("menusheet");if(d.shown){a(this).data("menusheet",{});var e=d.source;c.trigger("pageAnimationStart",{direction:"out",animation:void 0,back:!0}),e.unbind("touchstart mousedown",d.closehandler),e.one("webkitTransitionEnd",function(){e.removeClass("inmotion transition in"),c.removeClass("inmotion out"),c.trigger("pageAnimationEnd",{direction:"out",animation:void 0,back:!0}),!b||b.apply(this,arguments)}),e.addClass("inmotion transition in"),c.addClass("inmotion out").removeClass("current"),a("#jqt").removeClass("menuopened")}return c}function c(b){var c=a(this),d=a(this).data("menusheet")||{};if(!d.shown){var e=a("#jqt .current:not(.menusheet)");c.trigger("pageAnimationStart",{direction:"in",animation:void 0,back:!1});var f=function(){return c.menusheet("hide"),!1};e.one("webkitTransitionEnd",function(){e.one("touchstart mousedown",f),e.removeClass("inmotion transition out"),c.removeClass("inmotion in"),c.trigger("pageAnimationEnd",{direction:"in",animation:void 0,back:!1}),!b||b.apply(this,arguments)}),d.shown=!0,d.closehandler=f,d.source=e,a(this).data("menusheet",d),e.addClass("inmotion transition out"),c.addClass("current in"),a("#jqt").addClass("menuopened")}return c}var d=a("head script").last().attr("src")||"",e=d.split("?")[0].split("/").slice(0,-1).join("/")+"/",f=e+"jqt.menusheet.css",g=a('<link href="'+f+'" rel="stylesheet">');a("head").append(a(g));var h={init:function(){a(this).addClass("menusheet"),a(this).data("menusheet",{shown:!1})},show:c,hide:b};a.fn.menusheet=function(b){if(h[b]){if(a(this).is(".menusheet"))return h[b].apply(this,Array.prototype.slice.call(arguments,1));var c="Target is not a `menusheet`. Action `"+b+"` is ignored.";console.warn(c)}else{if("object"==typeof b||!b)return h.init.apply(this,arguments);a.error('Method "'+b+'" does not exist on jqt.menusheet')}},a.jQT?(a.jQT.addTapHandler({name:"open-menusheet",isSupported:function(a,b){return b.$el.is(".menu")},fn:function(b,c){c.$el.removeClass("active");var d=a(c.hash);return d.menusheet("show"),!1}}),a.jQT.addTapHandler({name:"follow-menulink",isSupported:function(b,c){return a("#jqt").hasClass("menuopened")?c.$el.is(".menusheet a"):!1},fn:function(a,b){b.$el.removeClass("active");var c=b.$el.closest(".menusheet");return c.menusheet("hide",function(){b.$el.is(".dismiss")||b.$el.trigger("tap")}),!1}})):console.error("Extension `jqt.menusheet` failed to load. jQT not found")}($);