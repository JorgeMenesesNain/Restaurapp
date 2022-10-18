import React, { useState, useEffect, useCallback } from "react";
import { Form, Image, Button, Dropdown, Checkbox } from "semantic-ui-react";
import { map } from "lodash";
import { useDropzone } from "react-dropzone";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useCategory, useProduct } from "../../../../hooks";
import "./AddEditProductForm.scss";

/* add-edit-product-form
 */
export function AddEditProductForm() {
  const [categoriesFormat, setCategoriesFormat] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);

  const { categories, getCategories } = useCategory();

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    setCategoriesFormat(formatDropdownData(categories));
  }, [categories]);

  const onDrop = useCallback(async (acceptedFile) => {
    const file = acceptedFile[0];
    setPreviewImage(URL.createObjectURL(file));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png",
    noKeyboard: true,
    multiple: false,
    onDrop,
  });

  return (
    <Form className="add-edit-product-form">
      <Form.Input name="title" placeholder="Nombre del producto" />
      <Form.Input type="number" name="price" placeholder="precio" />

      <Dropdown
        placeholder="Categoria"
        fluid
        selection
        search
        options={categoriesFormat}
      />

      <div className="add-edit-product-form__active">
        <Checkbox toggle />
        Producto activo
      </div>
      <Button type="button" fluid {...getRootProps()}>
        Subir imagen
      </Button>
      <input {...getInputProps()} />
      <Image src={previewImage} />

      <Button type="submit" primary fluid content="Crear" />
    </Form>
  );
}

function formatDropdownData(data) {
  return map(data, (item) => ({
    key: item.id,
    text: item.title,
    value: item.id,
  }));
}
