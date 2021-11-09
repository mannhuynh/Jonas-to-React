import React from "react";
import "./app_layout.css";

const menus = ["New", "Reply", "Forward", "Mark Unread", "Trash"];
const emails = [
	"Email 1",
	"Email 2",
	"Email 3",
	"Email 4",
	"Email 5",
	"Email 6",
	"Email 7",
	"Email 8",
	"Email 9",
	"Email 10",
];

export default function AppLayout() {
	return (
		<div className="body">
			<nav>Nav</nav>
			<menu>
				{/* <button>New</button>
				<button>Reply</button>
				<button>Forward</button>
				<button>Mark Unread</button>
				<button>Trash</button> */}
				{menus.map((menu) => (
					<button key={menu}> {menu}</button>
				))}
			</menu>
			<section>
				{emails.map((email) => (
					<div key={email} className="email">
						{" "}
						{email}
					</div>
				))}
			</section>
			<main>Email View</main>
			<aside>Additional Info</aside>
		</div>
	);
}
