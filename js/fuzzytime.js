// see http://stackoverflow.com/questions/11479170/javascript-fuzzy-time-e-g-10-minutes-ago-thats-in-exact-seconds
// console.log(timeAgo(new Date(Date.parse('Jun 12 2006 11:52:33'))));
// console.log(timeAgo(new Date(new Date().getTime() - 3600000)));
// console.log(timeAgo(new Date()));
// console.log(timeAgo(new Date(-92709631247000)));

function timeAgo(comparisonDate) {

   var timeparts = [
       {name: 'millenni', div: 31556736000, p: 'a', s: 'um'},
       {name: 'centur', div: 3155673600, p: 'ies', s: 'y'},
       {name: 'decade', div: 315567360},
       {name: 'year', div: 31556736},
       {name: 'month', div: 2629728},
       {name: 'day', div: 86400},
       {name: 'hour', div: 3600},
       {name: 'minute', div: 60},
       {name: 'second', div: 1}
   ];

    var i = 0,
	parts = [],
	interval = Math.floor((new Date().getTime() - comparisonDate.getTime()) / 1000);
    for ( ; interval > 0; i += 1) {
	value = Math.floor(interval / timeparts[i].div);
	interval = interval - (value * timeparts[i].div);
	if (value) {
            parts.push(value + ' ' + timeparts[i].name + (value !== 1 ? timeparts[i].p || 's' : timeparts[i].s || ''));
	}
    }
    if (parts.length === 0) { return 'now'; }
    return parts.join(', ') + ' ago';
}