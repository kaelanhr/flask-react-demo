import React, { useState } from "react";

import type { FieldProps } from "@fluentui/react-components";
import { Dropdown, Field, Input, useId, Option } from "@fluentui/react-components";
import { Button } from "@fluentui/react-components";

export default function ShipDesigner() {
	const [first, setfirst] = useState<string[]>(["y"]);
	// const [selected, setSelected] = useState<string>(["Weapon"]);

	const items = first.map((x) =>
		<p>x</p>
	);

	const addItem = () => {
		const newFeatures = [...first, "x"];
		setfirst(newFeatures);
	};

		const dropdownId = useId("dropdown-default");
		const options = ["Weapon", "Utility"];
	return (
		<>
			<div>ShipDesigner</div>
			<p>Wth</p>
			{items}
			<Field label="Ship Class">
				<Input />
			</Field>

			<Button onClick={() => addItem()}>Add Module</Button>
			<Dropdown
				aria-labelledby={dropdownId}
				placeholder="Select A Type"
				// onSelect={(x) => setSelected(x)}
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