import PropTypes from 'prop-types';

/* const newMessage = {
    message: 'Hola mundo',
    title: 'Aldo'
};

const getSaludo = () => {
    return 'Hola Mundo';
}; */

export const FirstApp = ( {title,subTitle,name} ) => {

    return (
        <>
            <h1> {title} </h1>
            <p> Soy un subtitulo </p>
            <p> Esto recibe una variable numerica: {subTitle} </p>
            <p> Nombre: {name} </p>
        </>
    );

}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 0,
    name: 'Aldo'
}