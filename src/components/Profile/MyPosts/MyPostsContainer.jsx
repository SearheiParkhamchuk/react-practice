import { addPostActionCreator } from '../../../redux/reducers/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        posts: state.profile.posts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: message => {
            dispatch(addPostActionCreator(message));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;