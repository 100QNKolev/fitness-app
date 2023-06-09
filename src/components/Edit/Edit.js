import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { usePostContext } from '../../contexts/postContext';

import styles from './Edit.module.css';

export const EditPost = () => {

    const { postId } = useParams();
    const { onEditSubmit, getOnePost } = usePostContext();

    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        title: '',
        thumbnailUrl: '',
        description: '',
    }, onEditSubmit);

    useEffect(() => {
        getOnePost(postId)
            .then(result => {
                changeValues(result);
            });
        // eslint-disable-next-line
    }, [postId]);

    return (
        <div>
            <div className={styles['logo']}></div>
            <div className={styles['editPost-block']}>
                <form onSubmit={onSubmit}>
                    <h1>Edit Post</h1>
                    <input value={values.title} onChange={changeHandler} type="text" placeholder="Title" id="title" name="title" />
                    <input value={values.thumbnailUrl} onChange={changeHandler} type="text" placeholder="Thumbnail URL" id="thumbnailUrl" name="thumbnailUrl" />
                    <textarea value={values.description} onChange={changeHandler} placeholder="Description" id="description" name="description" />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
};