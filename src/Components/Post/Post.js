import React from 'react';
import Navbars from '../Navbars/Navbars'

const Post = () => {
    return (
        <div className="">
            <Navbars></Navbars>
            <h1>This is post</h1>
          <div className="container">
          <div className="row container bg-info ">
                <div className="col-md-4">
                    <div class="form-check">
                        <h2>select subject</h2>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Default checkbox
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                        <label class="form-check-label" for="flexCheckChecked">
                            Checked checkbox
                        </label>
                    </div>

                </div>

            </div>
          </div>
        </div>
    );
};

export default Post;