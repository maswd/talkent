import axios from 'axios';

export const CloudImage = async (file) => {
	const files = file;
	const ImageData = new FormData();
	ImageData.append('image', files);
	try {
		const token = localStorage.getItem('accessToken');
		const imgUpload = axios({
			method: 'post',
			url: 'http://192.168.126.34:3000/v1/api/file/upload/single',
			data: ImageData,
			headers: {
				'Content-Type': 'multipart/form-data',
				authorization: `Bearer ${token}`
			}
		});

		const { data } = await imgUpload;
		if (data) {
			return data.details.data.file.path;
		}
	} catch (err) {}
};
