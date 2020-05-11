import React, { PropsWithChildren, useState } from "react";
import Nav from "@/components/Nav";
import { RouteComponentProps } from "react-router-dom";
import { mapDispatchToProps } from "@/store/actions/profile";
import { CombinedState, ProfileState, UserReceive } from "@/typings/";
import "./index.less";
import profileDispatchAction from "@/store/actions/profile";
import { connect } from "react-redux";
import { Button, message } from "antd";
import CityPicker from "@/components/CityPicker";

type Props = PropsWithChildren<
	RouteComponentProps & ReturnType<typeof mapStateToProps> & mapDispatchToProps
>;
const mapStateToProps = (state: CombinedState): ProfileState => state.profile;
//http://passer-by.com/data_location/list.json 数据来源

function Validate(formState: UserReceive) {
	if (formState.name === "") {
		message.error("任务未填写");
		return false;
	}
	if (formState.phoneNumber === "") {
		message.error("任务时间未填写");
		return false;
	}
	if (formState.distinct === "") {
		message.error("地址未填写");
		return false;
	}
	if (formState.distinctDetail === "") {
		message.error("备注未填写");
		return false;
	}
	return true;
}

function ProfileReceiveAdd(props: Props) {
	const [formState, setFormState] = useState<UserReceive>({
		name: "",
		phoneNumber: "",
		distinct: "",
		distinctDetail: "",
		checked: false,
	});
	const [cityCom, setCityCom] = useState(false);

	const handleFunc = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
		e.preventDefault();
		if (Validate(formState)) {
			props.profileAddAdress(formState);
		}
	};
	const distinctChange = () => {
		setCityCom(!cityCom);
	};
	const CityPickerCallback = (e: string) => {
		setFormState({ ...formState, distinct: e });
	};
	return (
		<>
			<Nav history={props.history}>任务细节</Nav>
			<form className="profile-receive-form">
				<div className="profile-receive-item">
					<input
						type="text"
						onChange={(e) => setFormState({ ...formState, name: e.target.value })}
						value={formState.name}
						placeholder={"任务名称"}
					/>
				</div>
				<div className="profile-receive-item">
					<input
						type="text"
						onChange={(e) =>
							setFormState({ ...formState, phoneNumber: e.target.value })
						}
						value={formState.phoneNumber}
						placeholder={"截至时间"}
					/>
				</div>

				<div onClick={distinctChange} className="profile-receive-item">
					<span
						style={{
							color: formState.distinct ? "#e88e30" : "rgba(222, 170, 154, 0.99)",
						}}
					>
						{formState.distinct ? formState.distinct : "任务地点"}
					</span>
				</div>

				<div className="profile-receive-item">
					<input
						type="text"
						onChange={(e) =>
							setFormState({ ...formState, distinctDetail: e.target.value })
						}
						value={formState.distinctDetail}
						placeholder={"任务备注"}
					/>
				</div>

				<div className="profile-receive-button">
					<Button htmlType="submit" onClick={handleFunc}>
						确认添加
					</Button>
				</div>
			</form>
			<CityPicker
				display={cityCom}
				setState={setCityCom}
				callbackFunc={CityPickerCallback}
			></CityPicker>
		</>
	);
}

export default connect(mapStateToProps, profileDispatchAction)(ProfileReceiveAdd);
