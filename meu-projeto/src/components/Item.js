import PropTypes, { number } from 'prop-types'

function Item({marca, ano_lancamento}) {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    );
}


Item.propsTypes = {
    marca: PropTypes.string.isRequired
}

export default Item;