import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';
export default function edit() {
	const MY_TEMPLATE = [
		["core/image", {}],
		["core/heading", { placeholder: "We Help You Find The Best Solution" }],
		["core/paragraph", { placeholder: "Lorem dimsum dor dor dor sit duduk down" }],
		["create-block/get-intro-block-row"],
		["core/button", { placeholder: "Klik di sini kak" }],
	];

	return (
		<div {...useBlockProps()}>
			<InnerBlocks template={MY_TEMPLATE}
			allowedBlocks={["create-block/get-intro-block-row"]}/>
		</div>
	);
}
