const minute = 60000;

module.exports = {
	EVENTS: {
		ANSWER: 'ANSWER',
		ANSWER_TIME_OUT: 'ANSWER_TIME_OUT',
		BUZZ_IN: 'BUZZ_IN',
		BUZZ_TIMEOUT: 'BUZZ_TIMEOUT',
		CORRECT_ANSWER: 'CORRECT_ANSWER',
		FINAL: 'FINAL',
		FINAL_ANSWER: 'FINAL_ANSWER',
		FINAL_ANSWER_TIME_OUT: 'FINAL_ANSWER_TIME_OUT',
		FINAL_BID: 'FINAL_BID',
		FINAL_BID_TIME_OUT: 'FINAL_BID_TIME_OUT',
		FINAL_QUESTION: 'FINAL_QUESTION',
		GAME_CHANGED: 'GAME_CHANGED',
		GAME_CLOSED: 'GAME_CLOSED',
		GAME_CREATED: 'GAME_CREATED',
		GAME_RESULTS: 'GAME_RESULTS',
		INCORRECT_ANSWER: 'INCORRECT_ANSWER',
		PICK_QUESTION: 'PICK_QUESTION',
		PLAYER_JOINED: 'PLAYER_JOINED',
		PLAYER_LEFT: 'PLAYER_LEFT',
		PRE_START: 'PRE_START',
		QUESTION: 'QUESTION',
		QUESTION_ANSWER_TIME_OUT: 'QUESTION_ANSWER_TIME_OUT',
		QUESTION_BUZZ_TIME_OUT: 'QUESTION_BUZZ_TIME_OUT',
		QUESTION_PICKED: 'QUESTION_PICKED',
	},
	GAME_EXPORT_FIELDS: [
		'allPlayersAttempted', 'currentQuestion', 'host', 'id', 'name', 'players', 'round',
		'showNumber', 'started', 'state',
	],
	NUMBER_MAP: {
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
		10: 'ten',
	},
	REGEX: {
		ARTICLES: /(^a |^the |^of | a | the | of |[/])/g,
		BAD_CHARS: /["'.-]/g,
	},
	REGISTRATION_EXPIRATION: 10 * minute,
	ROUNDS: {
		JEOPARDY: 'Jeopardy!',
		DOUBLE_JEOPARDY: 'Double Jeopardy!',
		FINAL_JEOPARDY: 'Final Jeopardy!',
	},
	SIMILARITY_THRESHOLD: 0.75,
};
