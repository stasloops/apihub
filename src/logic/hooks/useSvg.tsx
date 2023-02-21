import React from 'react';

export const useSvg = () => {
	const svg = {
		star: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" version="1.1" data-view-component="true">
				<path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
			</svg>
		),
		ar: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8" version="1.1">
				<path d="M0.205025 1.19467L3.00503 3.99467C3.27839 4.26804 3.72161 4.26804 3.99497 3.99467C4.26834 3.7213 4.26834 3.27809 3.99497 3.00472L1.19497 0.20472C0.921608 -0.0686469 0.478392 -0.0686469 0.205025 0.20472C-0.0683418 0.478087 -0.0683417 0.921303 0.205025 1.19467Z"></path>
				<path d="M3.00503 3.00501L0.205025 5.80501C-0.0683417 6.07838 -0.0683417 6.5216 0.205025 6.79496C0.478392 7.06833 0.921608 7.06833 1.19497 6.79496L3.99497 3.99496C4.26834 3.7216 4.26834 3.27838 3.99497 3.00501C3.72161 2.73165 3.27839 2.73165 3.00503 3.00501Z"></path>
			</svg>
		),
		pencil: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
				<path
					fill-rule="evenodd"
					d="M21 0c-1.141 0-2.55.45-3.55 1.45L1 17.9 0 26l8.1-1L24.55 8.551C25.606 7.495 26 6.064 26 5a5 5 0 00-5-5zM6.9 20.5L20.5 6.9l1.436 1.436-13.6 13.6L6.9 20.5zm-2.836-2.836L5.5 19.1 19.1 5.5l-1.436-1.436-13.6 13.6zm-1.215 1.584l3.902 3.903-4.452.55.55-4.453zM19.09 2.689l4.221 4.221C23.802 6.295 24 5.523 24 5c0-1.654-1.346-3-3-3-.522 0-1.295.198-1.91.689z"
				></path>
			</svg>
		),
		checkmark: (
			<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24">
				<path data-v-d9cdbabe="" d="M10 18.41L3.29004 11.71L4.71004 10.29L10 15.59L19.29 6.29001L20.71 7.71001L10 18.41Z"></path>
			</svg>
		),
		settings: (
			<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 54 54">
				<g>
					<g>
						<path d="M51.22,21h-5.052c-0.812,0-1.481-0.447-1.792-1.197s-0.153-1.54,0.42-2.114l3.572-3.571   c0.525-0.525,0.814-1.224,0.814-1.966c0-0.743-0.289-1.441-0.814-1.967l-4.553-4.553c-1.05-1.05-2.881-1.052-3.933,0l-3.571,3.571   c-0.574,0.573-1.366,0.733-2.114,0.421C33.447,9.313,33,8.644,33,7.832V2.78C33,1.247,31.753,0,30.22,0H23.78   C22.247,0,21,1.247,21,2.78v5.052c0,0.812-0.447,1.481-1.197,1.792c-0.748,0.313-1.54,0.152-2.114-0.421l-3.571-3.571   c-1.052-1.052-2.883-1.05-3.933,0l-4.553,4.553c-0.525,0.525-0.814,1.224-0.814,1.967c0,0.742,0.289,1.44,0.814,1.966l3.572,3.571   c0.573,0.574,0.73,1.364,0.42,2.114S8.644,21,7.832,21H2.78C1.247,21,0,22.247,0,23.78v6.439C0,31.753,1.247,33,2.78,33h5.052   c0.812,0,1.481,0.447,1.792,1.197s0.153,1.54-0.42,2.114l-3.572,3.571c-0.525,0.525-0.814,1.224-0.814,1.966   c0,0.743,0.289,1.441,0.814,1.967l4.553,4.553c1.051,1.051,2.881,1.053,3.933,0l3.571-3.572c0.574-0.573,1.363-0.731,2.114-0.42   c0.75,0.311,1.197,0.98,1.197,1.792v5.052c0,1.533,1.247,2.78,2.78,2.78h6.439c1.533,0,2.78-1.247,2.78-2.78v-5.052   c0-0.812,0.447-1.481,1.197-1.792c0.751-0.312,1.54-0.153,2.114,0.42l3.571,3.572c1.052,1.052,2.883,1.05,3.933,0l4.553-4.553   c0.525-0.525,0.814-1.224,0.814-1.967c0-0.742-0.289-1.44-0.814-1.966l-3.572-3.571c-0.573-0.574-0.73-1.364-0.42-2.114   S45.356,33,46.168,33h5.052c1.533,0,2.78-1.247,2.78-2.78V23.78C54,22.247,52.753,21,51.22,21z M52,30.22   C52,30.65,51.65,31,51.22,31h-5.052c-1.624,0-3.019,0.932-3.64,2.432c-0.622,1.5-0.295,3.146,0.854,4.294l3.572,3.571   c0.305,0.305,0.305,0.8,0,1.104l-4.553,4.553c-0.304,0.304-0.799,0.306-1.104,0l-3.571-3.572c-1.149-1.149-2.794-1.474-4.294-0.854   c-1.5,0.621-2.432,2.016-2.432,3.64v5.052C31,51.65,30.65,52,30.22,52H23.78C23.35,52,23,51.65,23,51.22v-5.052   c0-1.624-0.932-3.019-2.432-3.64c-0.503-0.209-1.021-0.311-1.533-0.311c-1.014,0-1.997,0.4-2.761,1.164l-3.571,3.572   c-0.306,0.306-0.801,0.304-1.104,0l-4.553-4.553c-0.305-0.305-0.305-0.8,0-1.104l3.572-3.571c1.148-1.148,1.476-2.794,0.854-4.294   C10.851,31.932,9.456,31,7.832,31H2.78C2.35,31,2,30.65,2,30.22V23.78C2,23.35,2.35,23,2.78,23h5.052   c1.624,0,3.019-0.932,3.64-2.432c0.622-1.5,0.295-3.146-0.854-4.294l-3.572-3.571c-0.305-0.305-0.305-0.8,0-1.104l4.553-4.553   c0.304-0.305,0.799-0.305,1.104,0l3.571,3.571c1.147,1.147,2.792,1.476,4.294,0.854C22.068,10.851,23,9.456,23,7.832V2.78   C23,2.35,23.35,2,23.78,2h6.439C30.65,2,31,2.35,31,2.78v5.052c0,1.624,0.932,3.019,2.432,3.64   c1.502,0.622,3.146,0.294,4.294-0.854l3.571-3.571c0.306-0.305,0.801-0.305,1.104,0l4.553,4.553c0.305,0.305,0.305,0.8,0,1.104   l-3.572,3.571c-1.148,1.148-1.476,2.794-0.854,4.294c0.621,1.5,2.016,2.432,3.64,2.432h5.052C51.65,23,52,23.35,52,23.78V30.22z"></path>
						<path d="M27,18c-4.963,0-9,4.037-9,9s4.037,9,9,9s9-4.037,9-9S31.963,18,27,18z M27,34c-3.859,0-7-3.141-7-7s3.141-7,7-7   s7,3.141,7,7S30.859,34,27,34z"></path>
					</g>
				</g>
			</svg>
		),
		partner: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -51 512.0001 512">
				<g>
					<path d="m408.378906 77.921875c3.902344-3.910156 3.902344-10.242187 0-14.140625-3.910156-3.910156-10.238281-3.910156-14.140625 0-3.910156 3.898438-3.910156 10.230469 0 14.140625 3.902344 3.898437 10.230469 3.898437 14.140625 0zm0 0"></path>
					<path d="m130.488281 98.628906c3.902344-3.898437 3.902344-10.230468 0-14.140625-3.910156-3.898437-10.238281-3.898437-14.140625 0-3.910156 3.910157-3.910156 10.242188 0 14.140625 3.902344 3.910156 10.230469 3.910156 14.140625 0zm0 0"></path>
					<path d="m71.640625 156.210938 29.929687-29.941407c3.90625-3.90625 3.902344-10.234375 0-14.140625-3.90625-3.90625-10.238281-3.902344-14.144531 0l-29.929687 29.941406c-3.902344 3.90625-3.902344 10.238282.003906 14.140626 3.902344 3.90625 10.234375 3.90625 14.140625 0zm0 0"></path>
					<path d="m441.367188 127.210938c3.90625 3.90625 10.238281 3.90625 14.144531 0 3.90625-3.902344 3.90625-10.234376 0-14.140626l-19.949219-19.949218c-3.90625-3.90625-10.238281-3.90625-14.144531 0-3.902344 3.902344-3.902344 10.234375 0 14.140625zm0 0"></path>
					<path d="m509.070312 116.070312-113.121093-113.140624c-3.820313-3.824219-9.992188-3.917969-13.925781-.207032-8.785157 8.277344-50.078126 47.164063-50.675782 47.746094-.035156.035156-.074218.066406-.109375.101562-9.78125 9.78125-19.410156 14.140626-31.222656 14.140626-24.148437 0-42.648437 6.820312-58.011719 21.371093-12.597656-11.929687-26.875-18.097656-46.800781-20.15625l-49.992187-49.996093c-3.90625-3.90625-10.238282-3.90625-14.144532 0l-128.136718 128.140624c-3.804688 3.800782-3.929688 9.941407-.222657 13.898438.078125.082031.144531.164062.222657.242188 0 0 83.382812 83.253906 83.5 83.367187l-3.53125 3.53125c-13.671876 13.671875-13.679688 35.8125.003906 49.496094 6.476562 6.46875 15.375 10.3125 25.109375 10.214843-.105469 9.605469 3.605469 18.5 10.246093 25.140626 6.746094 6.746093 15.761719 10.324218 25.109376 10.226562-.101563 9.597656 3.605468 18.488281 10.246093 25.128906 6.476563 6.46875 15.371094 10.3125 25.109375 10.214844-.105468 9.605469 3.605469 18.5 10.246094 25.140625 13.644531 13.644531 35.84375 13.644531 49.492188 0l3.539062-3.539063 3.539062 3.539063c13.644532 13.644531 35.84375 13.644531 49.492188 0 6.625-6.625 10.34375-15.503906 10.25-25.121094 9.550781.097657 18.449219-3.578125 25.109375-10.238281 6.914063-6.914062 10.320313-16.027344 10.226563-25.109375 9.695312.101563 18.554687-3.671875 25.125-10.242187 6.652343-6.648438 10.355468-15.558594 10.246093-25.140626 9.292969.09375 18.328125-3.4375 25.113281-10.21875 13.675782-13.675781 13.675782-35.8125 0-49.492187l-3.527343-3.527344c69.722656-69.644531-18.476563 18.625 111.496093-111.371093 3.90625-3.90625 3.90625-10.234376 0-14.140626zm-484.925781 35.066407 113.996094-113.992188 38.417969 38.417969-113.972656 113.988281zm72.894531 129.324219c-5.859374-5.859376-5.859374-15.347657 0-21.210938l35.359376-35.359375c5.851562-5.847656 15.363281-5.84375 21.210937 0 5.871094 5.875 5.871094 15.347656 0 21.21875l-35.347656 35.347656c-5.851563 5.84375-15.375 5.84375-21.222657.003907zm35.359376 35.359374c-5.863282-5.867187-5.871094-15.351562 0-21.21875l35.351562-35.351562c5.871094-5.867188 15.347656-5.871094 21.21875 0 5.847656 5.847656 5.871094 15.339844 0 21.207031-.003906.003907-.003906.003907-.003906.007813l-35.355469 35.355468c-5.847656 5.847657-15.363281 5.847657-21.210937 0zm35.351562 35.347657c-5.859375-5.855469-5.859375-15.347657 0-21.207031l35.359375-35.359376c5.847656-5.847656 15.359375-5.847656 21.214844.007813 5.773437 5.761719 5.945312 15.253906-.003907 21.207031 0 0 0 0-.003906.003906l-35.34375 35.34375c-5.851562 5.847657-15.375 5.847657-21.222656.003907zm35.359375 35.363281c-5.863281-5.867188-5.871094-15.351562 0-21.21875l35.351563-35.351562c5.863281-5.863282 15.347656-5.871094 21.214843 0 5.902344 5.902343 5.816407 15.398437 0 21.210937l-35.355469 35.359375c-5.851562 5.84375-15.363281 5.84375-21.210937 0zm77.777344 0c-5.84375 5.847656-15.359375 5.847656-21.207031 0l-3.539063-3.539062 17.679687-17.679688c1.195313-1.195312 2.273438-2.472656 3.273438-3.796875l3.789062 3.792969c.003907 0 .003907 0 .007813.003906 0 0 .003906.003906.003906.003906 5.863281 5.863282 5.863281 15.34375-.007812 21.214844zm106.074219-106.074219c-5.851563 5.84375-15.371094 5.84375-21.21875 0l-45.960938-45.957031c-3.90625-3.90625-10.238281-3.90625-14.144531 0-3.902344 3.902344-3.902344 10.234375 0 14.140625l45.964843 45.964844c5.863282 5.859375 5.867188 15.34375-.003906 21.214843-5.871094 5.871094-15.359375 5.847657-21.207031 0l-45.960937-45.972656c-3.902344-3.902344-10.234376-3.902344-14.140626 0-3.90625 3.90625-3.90625 10.238282-.003906 14.144532l45.960938 45.96875c5.847656 5.847656 5.847656 15.363281 0 21.207031-2.828125 2.832031-6.597656 4.394531-10.609375 4.394531-9.503907 0-12.566407-7.484375-21.578125-15.363281-.089844-9.210938-3.714844-17.855469-10.234375-24.375-6.632813-6.640625-15.515625-10.347657-25.113281-10.253907.097656-9.613281-3.625-18.496093-10.25-25.113281-6.914063-6.914062-16.027344-10.316406-25.109376-10.222656.199219-19.722656-15.773437-35.574219-35.351562-35.371094.097656-9.714843-3.699219-18.5625-10.25-25.113281-13.644531-13.648438-35.847656-13.648438-49.492188 0l-17.6875 17.6875-23.828124-23.757812 117.695312-117.714844c14.574219 1.664062 24.386719 5.855468 33.382812 14.21875l-28.253906 28.25c-15.582031 15.59375-15.582031 40.96875.003906 56.570312 15.597657 15.585938 40.976563 15.589844 56.570313-.003906l28.289063-28.285156c18.28125 18.285156 89.203124 89.210937 102.527343 102.539062 5.847657 5.84375 5.847657 15.359375.003907 21.203125zm-3.53125-53.019531-84.859376-84.863281 7.070313-7.070313c3.90625-3.90625 3.90625-10.238281 0-14.144531-3.90625-3.902344-10.234375-3.902344-14.144531 0l-49.5 49.503906c-7.792969 7.792969-20.488282 7.792969-28.285156 0-7.792969-7.800781-7.792969-20.492187-.003907-28.289062 10.257813-10.253907 30.476563-30.46875 40.722657-40.710938 11.859374-11.859375 25.921874-17.152343 45.585937-17.152343 14.144531 0 26.355469-4.25 37.796875-13.25l99.574219 102.160156c-65.089844 64.921875-52.242188 52.105468-53.957031 53.816406zm68.101562-67.960938-98.960938-101.53125 36.101563-34.011718 99.1875 99.207031zm0 0"></path>
				</g>{' '}
			</svg>
		),
	};

	return {
		svg,
	};
};
