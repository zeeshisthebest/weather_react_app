import React from "react";
import PropTypes from "prop-types";

const LastUpdatedBadge = ({ updatedAt }) => (
    <span className="text-slate-300 absolute bottom-0 right-0 pr-5 pb-2 pl-2 pt-1 rounded-sm text-xs bg-black bg-opacity-50">
        Last Updated at: {updatedAt ?? "never"}
    </span>
);

LastUpdatedBadge.propTypes = {
    updatedAt: PropTypes.string,
};

export default LastUpdatedBadge;
