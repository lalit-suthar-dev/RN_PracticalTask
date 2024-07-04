import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './PopupStyle';

interface PopupProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  confirmText: string;
  cancelText: string;
  message: string;
}

export const Popup: React.FC<PopupProps> = ({
  visible,
  onClose,
  onConfirm,
  confirmText,
  cancelText,
  message,
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>{message}</Text>
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={onConfirm}>
                  <Text style={styles.modalButtonText}>{confirmText}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, styles.cancelButton]}
                  onPress={onClose}>
                  <Text style={styles.modalButtonText}>{cancelText}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
