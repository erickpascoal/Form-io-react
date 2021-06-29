import styled from "styled-components";

export const Container = styled.div`
  * {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    outline: none;
  }

  *:focus {
    box-shadow: none !important;
  }

  .row {
    display: flex;
  }

  .formbuilder {
    padding-top: 1rem;
    display: grid;
    grid-template-columns: 346px 1fr;
    /* display: flex; */
    /* flex-wrap: nowrap; */
  }

  /* =============================== painel lateral esquerdo  ============================ */

  .formcomponents {
    width: 100%;
    max-width: 100%;
    padding-top: 2rem;
    padding-left: 1.5rem;
    margin-right: 1rem;
  }

  .builder-sidebar_search {
    background-color: #fff;
    border: 1px solid #c4c4c4;
    padding: 9px 16px;
    border-radius: 8px;
    height: 42px;
  }

  .card-header {
    background-color: #f8f8f8;
    padding: 16px 12px;
    border: 0;
    padding: 5px;

    .btn {
      font-weight: 600;
      background: transparent;
      color: #1b7ca6;
      width: 100%;
      display: flex;
      padding: 16px 12px;
    }
  }

  .card-body {
    background-color: #f8f8f8;
    border: 0;

    .btn {
      width: 100%;
      padding: 16px 12px;
      background: #fff;
      color: #505050;
      box-shadow: 0px 1px 4px rgba(51, 64, 70, 0.25);
      border-radius: 6px;
      border: 0;
    }
  }

  /* =============================== area drag and drop  ============================ */

  .col-md-10 {
    width: 100%;
  }
  .drag-container,
  .drag-container:hover {
    margin-right: 1rem;
    padding: 24px 24px;
    border-radius: 6px;
    border: 2px dashed #000000;
  }

  .drag-and-drop-alert {
    /* display: none; */
  }

  .form-control {
    border-radius: 8px;
    background-color: #eeeeee;
    border: 0;
  }

  .form-control::placeholder {
    color: #c4c4c4;
  }

  .col-form-label {
    font-size: 16px;
    color: #505050;
  }
`;
