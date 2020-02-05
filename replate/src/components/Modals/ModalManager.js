import React, { useContext } from "react";
import ContactsModal from "./ContactsModal";
import AccountModal from "./AccountModal";
import DashboardModal from "./DashboardModal";
import { ModelContext } from "../../Context/ModelContext";
import ConfirmModal from "./ConfirmModal";

const Modals = {
  DashboardModal,
  AccountModal,
  ContactsModal,
  ConfirmModal
};

const ModalManager = props => {
  const { currentModel, setCurrentModel } = useContext(ModelContext);
  const closeModel = () => setCurrentModel(null);

  if (currentModel) {
    const ModelComponent = Modals[currentModel.name];
    return <ModelComponent closeModel={closeModel} {...currentModel.props} />;
  }
  return null;
};

export default ModalManager;