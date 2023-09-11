console.clear();
require("hackedcolors");
let print = () => {
	process.stdout.write(" ".random)
	setTimeout(() => {
		print()
	}, 1);
}
print()

/* 
console.time("start")
for(let i=0 ; i<1e9; i++){
	() => {}
}

console.timeEnd("start")
 */
