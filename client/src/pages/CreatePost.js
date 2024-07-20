import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";

function CreatePost() {
    return (
    <div className="createPostPage">
        <Formik> 
            <Form>
                <label>Title : </label>
                <Field 
                autocomplete= "off"
                id="inputCreatePost" 
                name="title" 
                placeholder="Title"/>

                <label>Post : </label>
                <Field
                autocomplete= "off"
                id="inputCreatePost" 
                name="postText" 
                placeholder="Create Post"/>

                <label>Username : </label>
                <Field 
                autocomplete= "off"
                id="username" 
                name="username" 
                placeholder="Username"/>
            </Form>
            </Formik>
    </div>
    );
}

export default CreatePost;
