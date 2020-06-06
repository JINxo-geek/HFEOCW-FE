import React, { PropsWithChildren, useEffect } from "react";
import Nav from "@/components/Nav";
import { RouteComponentProps } from "react-router-dom";
import { mapDispatchToProps } from "@/store/actions/profile";
import { CombinedState, ProfileState, UserHistory } from "@/typings/";
import "./index.less";
import profileDispatchAction from "@/store/actions/profile";
import { connect } from "react-redux"

type Props = PropsWithChildren<
	RouteComponentProps & ReturnType<typeof mapStateToProps> & mapDispatchToProps
>;
const mapStateToProps = (state: CombinedState): ProfileState => state.profile;

function ProfileHistory2(props: Props) {

	return (
		<>
			<Nav history={props.history}>番茄钟</Nav>
			<div className="profile-history">
        <iframe style={{border:0,width:"100%",height:630,}} src="http://localhost:5000/freecodecamp-pomodoro-clock/dist/index.html"/>
			</div>
		</>
	);
}

export default connect(mapStateToProps, profileDispatchAction)(ProfileHistory2);
