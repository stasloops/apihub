export const useDebounce = () => {
	// eslint-disable-next-line no-unused-vars
	const debounce = (callback: (arg: string) => void, delay: number) => {
		let timer: any = null;

		return (arg: any) => {
			if (timer) {
				clearInterval(timer);
			}

			timer = setTimeout(() => {
				callback(arg);
			}, delay);
		};
	};

	return { debounce };
};
