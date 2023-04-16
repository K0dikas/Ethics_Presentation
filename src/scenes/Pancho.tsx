import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {createSignal} from "@motion-canvas/core/lib/signals";
import {Txt, Rect, Line, Circle, Spline, Knot, Img, Polygon, Node} from '@motion-canvas/2d/lib/components';
import {beginSlide, createRef, makeRef, range} from '@motion-canvas/core/lib/utils';
import {waitFor, waitUntil, all} from '@motion-canvas/core/lib/flow';
import {easeInOutCubic, easeOutCubic, easeInCubic, easeInOutElastic, linear} from '@motion-canvas/core/lib/tweening';
import {Vector2, Color} from '@motion-canvas/core/lib/types';
import {Gradient} from '@motion-canvas/2d/lib/partials';
import {CameraView} from "@ksassnowski/motion-canvas-camera";
import {Gear, StrutConfig} from '@jtstrader/motion-canvas-components';
import courage from "/src/scenes/Courage.png";
import Helping1 from "/src/scenes/Helping_Man.svg.png";
import Helping2 from "/src/scenes/Woman_Helping.svg";
import Helping3 from "/src/scenes/Helping_3_Man.svg.png";
import Helping4 from "/src/scenes/Cartoon_Helping_4.svg.png";
import { CircleText } from "../components/CircleText";

const BRIGHT_RED = "#fb4934"
const BRIGHT_GREEN = "#b8bb26"
const BRIGHT_YELLOW = "#fabd2f"
const BRIGHT_BLUE = "#83a598"
const BRIGHT_PURPLE = "#d3869b"
const BRIGHT_AQUA = "#8ec07c"
const BRIGHT_ORANGE = "#fe8019"
const WHITE = "#fff"
const GRUVBOX_DARK = "#1d2021"

export default makeScene2D(function* (view){
	
	const VIRTUE_IMPORTANCE = createRef<Txt>();

	const HELPING_FORMAT = createRef<Node>();
	const HELPING_1 = createRef<Img>();
	const HELPING_2 = createRef<Img>();
	const HELPING_3 = createRef<Img>();
	const HELPING_4 = createRef<Img>();

	const EXAMPLE_WORD = createRef<Txt>();

	const REFERENCES_FORMAT = createRef<Node>();
	const REFERENCE_1 = createRef<Txt>();
	const REFERENCE_3 = createRef<Txt>();
	const REFERENCE_4 = createRef<Txt>();
	const REFERENCE_5 = createRef<Txt>();
	const REFERENCE_6 = createRef<Txt>();
	const REFERENCE_7 = createRef<Txt>();
	const REFERENCE_8 = createRef<Txt>();
	const REFERENCE_9 = createRef<Txt>();
	const REFERENCE_10 = createRef<Txt>();

	view.add(
		<Txt
			antialiased={true}
			ref={VIRTUE_IMPORTANCE}
			fontSize={90}
			fontFamily={'Fira Code Retina'}
			fill={BRIGHT_YELLOW}
			x={0}
			y={-400}
		/>	
	);

	view.add(
		<Node ref={HELPING_FORMAT} x={-2500} y={0} scale={1}>
			<Img
				antialiased={true}
				ref={HELPING_1}
				src={Helping1}
				scale={1.3}
				x={500}
				y={0}
			/>

			<Img
				antialiased={true}
				ref={HELPING_2}
				src={Helping2}
				scale={0.65}
				x={-200}
				y={0}
			/>

			<Img
				antialiased={true}
				ref={HELPING_1}
				src={Helping1}
				scale={1.3}
				x={500}
				y={0}
			/>

			<Img
				antialiased={true}
				ref={HELPING_2}
				src={Helping2}
				scale={0.65}
				x={-200}
				y={0}
			/>

			<Img
				antialiased={true}
				ref={HELPING_3}
				src={Helping3}
				scale={0.5}
				x={-1000}
				y={0}
			/>

			<Img
				antialiased={true}
				ref={HELPING_4}
				src={Helping4}
				scale={1.5}
				x={1200}
				y={0}
			/>
		</Node>
	);

	view.add(
		<Txt
			antialiased={true}
			ref={EXAMPLE_WORD}
			fill={BRIGHT_PURPLE}
			fontSize={300}
			fontFamily={'Fira Code Retina'}
			x={0}
			y={0}
		/>
	);

	view.add(
		<Node ref={REFERENCES_FORMAT} x={0} y={0}>
			<Txt
				antialiased={true}
				ref={REFERENCE_1}	
				fill={BRIGHT_AQUA}
				fontFamily={'Fira Code Retina'}
				fontSize={50}
				lineHeight={80}
				y={-350}
			/>
			<Txt
				antialiased={true}
				ref={REFERENCE_3}	
				fill={BRIGHT_AQUA}
				fontFamily={'Fira Code Retina'}
				fontSize={50}
				lineHeight={80}
				y={-350}
			/>
			<Txt
				antialiased={true}
				ref={REFERENCE_4}	
				fill={BRIGHT_AQUA}
				fontFamily={'Fira Code Retina'}
				fontSize={50}
				lineHeight={80}
				x={-75}
				y={350}
			/>
			<Txt
				antialiased={true}
				ref={REFERENCE_5}	
				fill={BRIGHT_AQUA}
				fontFamily={'Fira Code Retina'}
				fontSize={50}
				lineHeight={80}
				y={-350}
			/>
			<Txt
				antialiased={true}
				ref={REFERENCE_6}	
				fill={BRIGHT_AQUA}
				fontFamily={'Fira Code Retina'}
				fontSize={50}
				lineHeight={80}
				y={-350}
			/>
			<Txt
				antialiased={true}
				ref={REFERENCE_7}	
				fill={BRIGHT_AQUA}
				fontFamily={'Fira Code Retina'}
				fontSize={50}
				lineHeight={80}
				y={-350}
			/>
			<Txt
				antialiased={true}
				ref={REFERENCE_8}	
				fill={BRIGHT_AQUA}
				fontFamily={'Fira Code Retina'}
				fontSize={50}
				lineHeight={80}
				y={-350}
			/>
			<Txt
				antialiased={true}
				ref={REFERENCE_9}	
				fill={BRIGHT_AQUA}
				fontFamily={'Fira Code Retina'}
				fontSize={50}
				lineHeight={80}
				y={-350}
			/>
			<Txt
				antialiased={true}
				ref={REFERENCE_10}	
				fill={BRIGHT_AQUA}
				fontFamily={'Fira Code Retina'}
				fontSize={50}
				lineHeight={80}
				y={-350}
			/>
		</Node>
	);

	yield* beginSlide('Tenth Slide');
	yield* VIRTUE_IMPORTANCE().text("Why Being Virtuous Is Important?", 1);
	yield* waitFor(13);

	yield* all(
		VIRTUE_IMPORTANCE().text("", 1),
		HELPING_FORMAT().position.x(2500, 30, easeInOutCubic),
	); 

	yield* EXAMPLE_WORD().text("EXAMPLE", 0.5);
	yield* waitFor(23);

	yield* all(
		EXAMPLE_WORD().text("VIRTUE", 1),
		EXAMPLE_WORD().fill(BRIGHT_AQUA, 1),
	);
	yield* waitFor(10);

	yield* EXAMPLE_WORD().text("", 1);
	yield* waitFor(3);

	yield* all(
		REFERENCE_1().text(`1. https://books.google.com.ph/books?hl=en&lr=&id=s6jgBQAAQ\nBAJ&oi=fnd&pg=PP1&dq=virtue+ethics+meaning&ots=FXpizuK1lt&si\ng=TGsznn_0dnWiDO81uBBEB5n2Uqb8&redir_esc=y#v=onepage&q=virt\nue%20ethics%20meaning&f=false`, 3),

		REFERENCE_3().text(`2. `, 3), // Mel
		REFERENCE_4().text(`3. https://plato.stanford.edu/entries/aristotle-ethics/`, 3), // Marion

	);

	yield* waitFor(10);
});
