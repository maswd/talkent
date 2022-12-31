import Header from '@editorjs/header';
import ImageTool from '@editorjs/image';
import { CloudImage } from './CloudImage';

const constants = () => {
	const onFileChange = async (file) => {
		const imageUrl = await CloudImage(file);
		if (imageUrl) {
			return imageUrl;
		}
		//  else {
		//     return 'nahi hai image'; // <-- put an error image url here
		// }
		// return ' nahi hai hai image'; // <-- put an error image url here
	};
	return {
		holder: 'editor',
		tools: {
			header: Header,
			image: {
				class: ImageTool,
				config: {
					uploader: {
						async uploadByFile(file) {
							return onFileChange(file).then((imageUrl) => {
								return {
									success: 1,
									file: {
										url: `http://192.168.126.34:3000${imageUrl}`
									}
								};
							});
						}
					}
				}
			}
		},
		//   Enable autofocus
		// autofocus: true,
		placeholder: 'آنچه در ذهن شماست ...',
		logLevel: 'ERROR',
		data: {},
		i18n: {
			messages: {
				/**
                     * Other below: translation of different UI components of the editor.js core
                     */
				ui: {
					blockTunes: {
						toggler: {
							'Click to tune': 'برای تنظیم کلیک کنید',
							'or drag to move': 'یا بکشید'
						}
					},
					inlineToolbar: {
						converter: {
							'Convert to': 'تبدیل به'
						}
					},
					toolbar: {
						toolbox: {
							Add: 'اضافه کردن',
							Filter: 'فیلتر کنید',
							'Nothing found': 'چیزی پیدا نشد'
						}
					}
				},

				/**
                     * Section for translation Tool Names: both block and inline tools
                     */
				toolNames: {
					Text: 'متن',
					Heading: 'تیتر ',
					Image: 'عکس'
					// "Code": "Код",
					// "Delimiter": "Разделитель",
					// "Raw HTML": "HTML-фрагмент",
					// "Table": "Таблица",
					// "Link": "Ссылка",
					// "Marker": "Маркер",
					// "Bold": "Полужирный",
					// "Italic": "Курсив",
					// "InlineCode": "Моноширинный",
				},

				/**
                     * Section for passing translations to the external tools classes
                     */
				tools: {
					/**
                         * Each subsection is the i18n dictionary that will be passed to the corresponded plugin
                         * The name of a plugin should be equal the name you specify in the 'tool' section for that plugin
                         */
					warning: {
						// <-- 'Warning' tool will accept this dictionary section
						Title: 'عنوان',
						Message: 'پیام'
					},
					image: {
						'Select an Image': 'یک تصویر را انتخاب کنید',
						'Couldn’t upload image. Please try another.': 'تصویر آپلود نشد. لطفا دوباره امتحان کنید.'
					},
					/**
                         * Link is the internal Inline Tool
                         */
					link: {
						'Add a link': 'درج لینک '
					}
				}
			},
			direction: 'rtl'
		}
	};
};

export default constants;
