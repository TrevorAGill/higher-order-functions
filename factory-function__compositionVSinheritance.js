let barker = (state) => ({
  bark: () => console.log(state.name + 'says woof!')
});

let dog22 = (name,age) => {
	let state = {
		name,
		age
    }
	return Object.assign(
    state,
		barker(state)
	)
};

let nina = dog22("Nina", 10);

nina;
