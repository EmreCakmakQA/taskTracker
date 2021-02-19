import PropTypes from 'prop-types';
import Button from './Button';


const Header = ({ title }) => {
    const onClick = () => {
        console.log("click")
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick} />
        </header>
    )
}

// Defaults title to 'Task Tracker'
Header.defaultProps = {
    title: 'Task Tracker',
}

// Restricts the prop type to a String
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
