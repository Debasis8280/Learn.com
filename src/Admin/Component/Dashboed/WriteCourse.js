import React,{useContext, useState} from 'react'
import AdminContext from '../../Context/AdminOperation/AdminContext';
import "./Style/WriteCourse.css"
function WriteCourse(props) {
    const {writeCourse} = useContext(AdminContext);
    const [data, setData] = useState({title:"",subtitle:"",Body:""});
    const {title,subtitle,Body} = data

    const collection = props.match.params.course;

    const [image, setImage] = useState();
    const onChange = (e)=>{
        setData({...data,[e.target.name]:e.target.value});
    }
    const onsubmitForm = (e) => {
        e.preventDefault();
       const formData = new FormData();
       formData.append("collectionCourse",collection)
       formData.append("title",title);
       formData.append("subtitle",subtitle);
       formData.append("image",image);
       formData.append("body",Body);

       writeCourse(formData)
    }
    return (
        <div className="container">
            <form onSubmit={onsubmitForm} encType="multipart/form-data">
                <div className="form-group">
                    <label>Title:</label>
                    <input type="text" name="title" className="form-control" onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label>Sub Title:</label>
                    <input type="text" name="subtitle" className="form-control" onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label>Image(Optional):</label>
                    <input type="file" name="image" className="form-control" onChange={(e)=>{setImage(e.target.files[0])}}/>
                </div>
                <div className="form-group">
                    <label>Body:</label>
                    <textarea rows="10" name="Body" className="form-control textArea" onChange={onChange}/>
                </div>
                <div className="form-group">
                    <input type="submit" name="Body" className="btn btn-primary"/>
                    <input type="reset"  className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}

export default WriteCourse
