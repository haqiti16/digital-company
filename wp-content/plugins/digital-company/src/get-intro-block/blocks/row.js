import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import metadataRow from "./row.json";
const {name} = metadataRow;
export {metadataRow, name};

const TEMPLATE = [
	["core/columns", {}, [
		["core/columns", { templateLock: "all" }, [
			["core/paragraph", { placeholder: "Lorem dimsum dor dor dor sit duduk down" }]
		]],
		["core/columns", { templateLock: "all", width: "50%", verticalAlignment: "center" }, [
			["core/image", { sizeSlug: "thumbnail" }]
		]],
	]]
];
export const settings = {
	icon: "smiley",
	edit() {
		return (
			<div {...useBlockProps()}>
				<InnerBlocks template={TEMPLATE} templateLock="all" />
			</div>
		);
	},

	save() {
		return (
			<div {...useBlockProps.save()}>
				<InnerBlocks.Content />
			</div>
		);
	}
}
