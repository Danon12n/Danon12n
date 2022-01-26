import React from "react";

export default class CustomButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isHover: false };
    }

    render() {
        return (
            <button
                style={{
                    textAlign: "center",
                    background: this.state.isHover
                        ? this.props.hoverBG
                        : this.props.background,
                    padding: this.props.paddings,
                    cursor: "pointer",
                    color: this.props.color,
                    border: this.state.isHover
                        ? this.props.hoverBorder
                        : this.props.border,
                    transition: this.props.transition,
                    borderRadius: this.props.borderRadius,
                }}
                onMouseEnter={() => {
                    this.setState({ isHover: true });
                }}
                onMouseLeave={() => {
                    this.setState({ isHover: false });
                }}
            >
                {this.props.text}
            </button>
        );
    }
}
