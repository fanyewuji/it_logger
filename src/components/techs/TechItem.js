import React from 'react';
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techActions';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech, deleteTech }) => {
    const handleDelete = () => {
        deleteTech(tech.id);
        M.toast({ html: `Tech deleted` });
    }

    return (
        <li className='collection-item'>
            <div>
                {tech.firstName} {tech.lastName}
                <a href='!#' className='secondary-content'>
                    <i className='material-icons orange-text' onClick={handleDelete}>delete</i>
                </a>
            </div>           
        </li>
    )
}

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
}

export default connect(null, { deleteTech })(TechItem);
