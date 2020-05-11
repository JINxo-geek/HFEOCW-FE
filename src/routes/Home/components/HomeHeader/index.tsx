import React, { useState, useRef } from "react";
import { createPortal } from "react-dom";
import "./index.less";
import logo from "@/assets/images/logo.jpg";
import { Icon } from "antd";
import classnames from "classnames";
import QueueAnim from "rc-queue-anim";
import Texty from "rc-texty";

interface Props {
	currentCategory: string;
	setCurrentCategory: (currentCategory: string) => any;
	refreshProduct: Function;
}

function HomeHeader(props: Props) {
	const [ulvisible, setulvisible] = useState(false);
	const mask = useRef<HTMLDivElement>(null);
	const setCurrentCategory = (event: React.MouseEvent<HTMLUListElement>) => {
		event.stopPropagation();
		const target = event.target as HTMLUListElement;
		const category = target.dataset.category as string;
		if (category) {
			props.setCurrentCategory(category);
			props.refreshProduct();
			setulvisible(false);
		} else {
			setulvisible(false);
		}
	};
	const clientWidth = document.body.clientWidth;
	const clientHeight = document.body.clientHeight;

	const setVisible = () => {
		setulvisible((ulvisible) => !ulvisible);
	};

	return (
		<QueueAnim>
			<header className="home-header" key="homeheader">
				<div className="home-logo">
					<img src={logo} className="homelogo"></img>
					<Icon
						type="bars"
						onClick={setVisible}
						className={classnames({ active: ulvisible === true })}
					></Icon>
				</div>
				<QueueAnim delay={200}>
					{ulvisible &&
						createPortal(
							<>
								<ul className="category" onClick={setCurrentCategory} key="ul">
									<li
										data-category="all"
										className={classnames({
											active: props.currentCategory === "all",
										})}
									>
										<Texty type={"left"}>全部资料</Texty>
									</li>
									<li
										data-category="设备"
										className={classnames({
											active: props.currentCategory === "设备",
										})}
									>
										<Texty type={"right"}>设备</Texty>
									</li>
									<li
										data-category="zishi"
										className={classnames({
											active: props.currentCategory === "使用姿势",
										})}
									>
										<Texty type={"left"}>使用姿势</Texty>
									</li>
									<li
										data-category="桌椅要求"
										className={classnames({
											active: props.currentCategory === "桌椅要求",
										})}
									>
										<Texty type={"right"}>桌椅要求</Texty>
									</li>
									<li
										data-category="显示器要求"
										className={classnames({
											active: props.currentCategory === "显示器要求",
										})}
									>
										<Texty type={"left"}>显示器要求</Texty>
									</li>
									<li
										data-category="环境"
										className={classnames({
											active: props.currentCategory === "环境",
										})}
									>
										<Texty type={"right"}>环境</Texty>
									</li>
								</ul>

								<div
									className="mask"
									ref={mask}
									onClick={() => {
										setulvisible(false);
									}}
									style={{
										width: clientWidth,
										height: clientHeight,
									}}
								></div>
							</>,
							window.document.body
						)}
				</QueueAnim>
			</header>
		</QueueAnim>
	);
}
export default HomeHeader;
