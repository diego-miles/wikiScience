// types/globals.d.ts
declare namespace Wiki {
    interface Props {
    data: ScienceField[];
    onClose: () => void;
    }
    interface SubTopic {
    mainField: string;
    subTopics: string[];
    }   
    interface ScienceField {
    title: string;
    subFields: SubTopic[];
    }
    interface ContainerIconProps {
    iconType: 'navBar' | 'profileMenu' | string;
    onClick?: () => void;
}
}


