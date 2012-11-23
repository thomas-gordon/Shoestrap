do ($ = jQuery) ->

	"use strict"

	App =
		init: ->
			console.log 'Application has started'
			@.appendP

		appendP: ->
			console.log('appendP has run');
			$('.wrapper').append '<p>appendP function is running.</p>'

			@.ajaxExample()

		ajaxExample: (callback) ->
			$.ajax
				method: "POST"
				url: "#"
				data:
					thing: 1
					thing2: 2
				success: (data) ->
					callback(data)

	initialize = ->
		App.init()

	$(initialize);