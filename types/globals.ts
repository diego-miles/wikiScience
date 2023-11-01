// types/globals.d.ts
declare namespace Wiki {
    interface PropsFields {
    data: ScienceField[];
    onClose: () => void;
    }
    interface SubTopic {
    title: string;
    topics: string[];
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


