import React, { useState } from "react";
import { Dropdown, Field, Input, useId, Option } from "@fluentui/react-components";
import { Button } from "@fluentui/react-components";

export default function ShipDesigner() {
	const [first, setfirst] = useState<string[]>([]);
	const [selected, setSelected] = useState<string>("");

	const items = first.map((x) =>
		<p>x, {x}</p>
	);

	const addItem = () => {
		const newFeatures = [...first, selected];
		setfirst(newFeatures);
	};

		const dropdownId = useId("dropdown-default");
		const options = ["Weapon", "Utility"];
	return (
		<>
			<div>ShipDesigner</div>
			<p>Core modules</p>
			<p>Sensor</p>
			<p>Shields</p>
			<p>Power Generator</p>
			<p>Hangar</p>
			<p>Hyperdrive</p>
			{items}
			<Field label="Ship Class">
				<Input />
			</Field>

			<Button onClick={() => addItem()}>Add Module</Button>
			<Dropdown
				aria-labelledby={dropdownId}
				placeholder="Select A Type"
				onOptionSelect={(x, y) => setSelected(y.optionValue || "")}
			>
				{options.map((option) => (
					<Option key={option}>
						{option}
					</Option>
				))}
			</Dropdown>
		</>
	);
}