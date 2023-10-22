import * as React from "react";
import {
	Accordion,
	AccordionHeader,
	AccordionItem,
	AccordionPanel,
	DataGrid,
	DataGridBody,
	DataGridCell,
	DataGridHeader,
	DataGridHeaderCell,
	DataGridRow,
	TableCellLayout,
	TableColumnDefinition,
	createTableColumn,
} from "@fluentui/react-components";

import {
	FolderRegular,
	EditRegular,
	OpenRegular,
	DocumentRegular,
	PeopleRegular,
	DocumentPdfRegular,
	VideoRegular,
} from "@fluentui/react-icons";

import { Switch } from "@fluentui/react-components";
import type { SwitchProps } from "@fluentui/react-components";

type NameCell = {
	label: string;
	name: string;
};

type LastUpdatedCell = {
	label: string;
	timestamp: number;
};

type LastUpdateCell = {
	label: string;
	icon: JSX.Element;
};

type AttributesCell = {
	label: string;
	status: string;
};

type Item = {
	designation: NameCell;
	squad: AttributesCell;
};

const items: Item[] = [
	{
		designation: { label: "THX-1138", name: "Test" },
		squad: { label: "Alpha", status: "available" },
	},
	{
		designation: { label: "ADE-1354", name: "Test" },
		squad: { label: "Bravo", status: "busy" },
	},
	{
		designation: { label: "ADT-1354", name: "Test" },
		squad: { label: "Alpha", status: "away" },
	},
	{
		designation: { label: "BRQ-1324", name: "Test" },
		squad: { label: "Alpha", status: "offline" },
	},
];

const columns: TableColumnDefinition<Item>[] = [
	createTableColumn<Item>({
		columnId: "unit",
		compare: (a, b) => {
			return a.designation.label.localeCompare(b.designation.label);
		},
		renderHeaderCell: () => {
			return "Unit";
		},
		renderCell: (item) => {
			return <TableCellLayout>{item.designation.label}</TableCellLayout>;
		},
	}),
	createTableColumn<Item>({
		columnId: "attributes",
		compare: (a, b) => {
			return a.squad.label.localeCompare(b.squad.label);
		},
		renderHeaderCell: () => {
			return "Attributes";
		},
		renderCell: (item) => {
			return <TableCellLayout>{item.squad.label}</TableCellLayout>;
		},
	})
];

export const Assignment = () => (
	<Accordion>
		<AccordionItem value="1">
			<AccordionHeader>Star Destroyer</AccordionHeader>
			<Switch label="Group Units" />
			<AccordionPanel>
				<div>Accordion Panel 1</div>
				<DataGrid
					items={items}
					columns={columns}
					sortable
					selectionMode="multiselect"
					getRowId={(item) => item.designation.label}
					onSelectionChange={(e, data) => console.log(data)}
					focusMode="composite"
				>
					<DataGridHeader>
						<DataGridRow selectionCell={{ "aria-label": "Select all rows" }}>
							{({ renderHeaderCell }) => (
								<DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
							)}
						</DataGridRow>
					</DataGridHeader>
					<DataGridBody<Item>>
						{({ item, rowId }) => (
							<DataGridRow<Item>
								key={rowId}
								selectionCell={{ "aria-label": "Select row" }}
							>
								{({ renderCell }) => (
									<DataGridCell>{renderCell(item)}</DataGridCell>
								)}
							</DataGridRow>
						)}
					</DataGridBody>
				</DataGrid>
			</AccordionPanel>
		</AccordionItem>
		<AccordionItem value="2">
			<AccordionHeader>Accordion Header 2</AccordionHeader>
			<AccordionPanel>
				<div>Accordion Panel 2</div>
			</AccordionPanel>
		</AccordionItem>
		<AccordionItem value="3">
			<AccordionHeader>Accordion Header 3</AccordionHeader>
			<AccordionPanel>
				<div>Accordion Panel 3</div>
			</AccordionPanel>
		</AccordionItem>
	</Accordion>
);
