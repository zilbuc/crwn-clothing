export type Section = {
  title: string;
  id: number;
  imageUrl: string;
  linkUrl: string;
  size?: string;
}

export interface DirectoryState {
  sections: Section[];
}

// export const DirectoryActionTypes = {
//   DO_NOTHING: 'DO_NOTHING',
// }

// interface DoNothing {
//   type: typeof DirectoryActionTypes.DO_NOTHING;
// }

// export type DirectoryActionCreatorTypes = DoNothing; 