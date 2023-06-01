import scss from '../UserLogo/UserLogo.module.scss'

const UserLogo = ({logo}) => {
    return (
        <div className={ scss.userlogo }>
            <img className={ scss.userlogoimg } src= {logo} alt={ logo } loading='lazy'/>
        </div>
    )
};

export default UserLogo;