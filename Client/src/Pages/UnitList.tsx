import * as React from "react";
import {
	FolderRegular,
	EditRegular,
	OpenRegular,
	DocumentRegular,
	PeopleRegular,
	DocumentPdfRegular,
	VideoRegular,
} from "@fluentui/react-icons";
import {
	PresenceBadgeStatus,
	Avatar,
	DataGridBody,
	DataGridRow,
	DataGrid,
	DataGridHeader,
	DataGridHeaderCell,
	DataGridCell,
	TableCellLayout,
	TableColumnDefinition,
	createTableColumn,
} from "@fluentui/react-components";

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
	file: NameCell;
	author: AttributesCell;
	lastUpdated: LastUpdatedCell;
	lastUpdate: LastUpdateCell;
};

const items: Item[] = [
	{
		file: { label: "Stormtrooper", name: "Test" },
		author: { label: "Ground, Trooper", status: "available" },
		lastUpdated: { label: "7h ago", timestamp: 1 },
		lastUpdate: {
			label: "You edited this",
			icon: <EditRegular />,
		},
	},
	{
		file: { label: "Snowtrooper", name: "Test" },
		author: { label: "Ground, Trooper", status: "busy" },
		lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
		lastUpdate: {
			label: "You recently opened this",
			icon: <OpenRegular />,
		},
	},
	{
		file: { label: "Sandtrooper", name: "Test" },
		author: { label: "Ground, Trooper", status: "away" },
		lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
		lastUpdate: {
			label: "You recently opened this",
			icon: <OpenRegular />,
		},
	},
	{
		file: { label: "Shadowtrooper", name: "Test" },
		author: { label: "Ground, Trooper", status: "offline" },
		lastUpdated: { label: "Tue at 9:30 AM", timestamp: 3 },
		lastUpdate: {
			label: "You shared this in a Teams chat",
			icon: <PeopleRegular />,
		},
	},
];

const columns: TableColumnDefinition<Item>[] = [
	createTableColumn<Item>({
		columnId: "unit",
		compare: (a, b) => {
			return a.file.label.localeCompare(b.file.label);
		},
		renderHeaderCell: () => {
			return "Unit";
		},
		renderCell: (item) => {
			return (
				<TableCellLayout>
					{item.file.label}
				</TableCellLayout>
			);
		},
	}),
	createTableColumn<Item>({
		columnId: "attributes",
		compare: (a, b) => {
			return a.author.label.localeCompare(b.author.label);
		},
		renderHeaderCell: () => {
			return "Attributes";
		},
		renderCell: (item) => {
			return (
				<TableCellLayout>
					{item.author.label}
				</TableCellLayout>
			);
		},
	}),
	createTableColumn<Item>({
		columnId: "lastUpdated",
		compare: (a, b) => {
			return a.lastUpdated.timestamp - b.lastUpdated.timestamp;
		},
		renderHeaderCell: () => {
			return "Last updated";
		},

		renderCell: (item) => {
			return item.lastUpdated.label;
		},
	}),
	createTableColumn<Item>({
		columnId: "lastUpdate",
		compare: (a, b) => {
			return a.lastUpdate.label.localeCompare(b.lastUpdate.label);
		},
		renderHeaderCell: () => {
			return "Last update";
		},
		renderCell: (item) => {
			return (
				<TableCellLayout media={item.lastUpdate.icon}>
					{item.lastUpdate.label}
				</TableCellLayout>
			);
		},
	}),
];


export default function UnitList() {
  return (
	<>
	<div>UnitList</div>
	<DataGrid
			items={items}
			columns={columns}
			sortable
			selectionMode="multiselect"
			getRowId={(item) => item.file.label}
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
		</>
  )
}
