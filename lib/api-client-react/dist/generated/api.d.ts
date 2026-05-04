import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { AddMemoryBody, ApprovePostBody, AuthLoginBody, AuthResponse, AuthSignupBody, AuthUser, AutoScheduleBody, AutoScheduleResponse, BrandAsset, BrandDna, BulkApproveBody, BulkApproveResponse, BulkGenerateBody, BulkGenerateResponse, Campaign, CampaignDetail, Client, ClientDashboard, ConnectSocialAccountBody, ContentSuggestionsResponse, CreateCampaignBody, CreateClientBody, CreatePostBody, CreateStorylineBody, ErrorResponse, GenerateCaptionsBody, GenerateCaptionsResponse, GenerateImagesBody, GenerateImagesResponse, GeneratePlanBody, GeneratePlanResponse, HealthStatus, Image, ListPostsParams, MemoryEntry, Post, PostingRules, PostizExport, RefreshToken200, RefreshTokenBody, SaveImageBody, SocialAccount, Storyline, UpdateCampaignBody, UpdateClientBody, UpdatePostBody, UpdateSettingsBody, UpdateSocialAccountBody, UpdateStorylineBody, UploadBrandAssetBody, UploadClientLogoBody, UploadPostImageBody, UploadResult, UpsertBrandDnaBody, UpsertPostingRulesBody, UserSettings } from "./api.schemas";
import { customFetch } from "../custom-fetch";
import type { ErrorType, BodyType } from "../custom-fetch";
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
/**
 * @summary Health check
 */
export declare const getHealthCheckUrl: () => string;
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary List all clients
 */
export declare const getListClientsUrl: () => string;
export declare const listClients: (options?: RequestInit) => Promise<Client[]>;
export declare const getListClientsQueryKey: () => readonly ["/api/clients"];
export declare const getListClientsQueryOptions: <TData = Awaited<ReturnType<typeof listClients>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listClients>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listClients>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListClientsQueryResult = NonNullable<Awaited<ReturnType<typeof listClients>>>;
export type ListClientsQueryError = ErrorType<unknown>;
/**
 * @summary List all clients
 */
export declare function useListClients<TData = Awaited<ReturnType<typeof listClients>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listClients>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create a new client
 */
export declare const getCreateClientUrl: () => string;
export declare const createClient: (createClientBody: CreateClientBody, options?: RequestInit) => Promise<Client>;
export declare const getCreateClientMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createClient>>, TError, {
        data: BodyType<CreateClientBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createClient>>, TError, {
    data: BodyType<CreateClientBody>;
}, TContext>;
export type CreateClientMutationResult = NonNullable<Awaited<ReturnType<typeof createClient>>>;
export type CreateClientMutationBody = BodyType<CreateClientBody>;
export type CreateClientMutationError = ErrorType<unknown>;
/**
 * @summary Create a new client
 */
export declare const useCreateClient: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createClient>>, TError, {
        data: BodyType<CreateClientBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createClient>>, TError, {
    data: BodyType<CreateClientBody>;
}, TContext>;
/**
 * @summary Get a client by ID
 */
export declare const getGetClientUrl: (clientId: string) => string;
export declare const getClient: (clientId: string, options?: RequestInit) => Promise<Client>;
export declare const getGetClientQueryKey: (clientId: string) => readonly [`/api/clients/${string}`];
export declare const getGetClientQueryOptions: <TData = Awaited<ReturnType<typeof getClient>>, TError = ErrorType<unknown>>(clientId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getClient>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getClient>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetClientQueryResult = NonNullable<Awaited<ReturnType<typeof getClient>>>;
export type GetClientQueryError = ErrorType<unknown>;
/**
 * @summary Get a client by ID
 */
export declare function useGetClient<TData = Awaited<ReturnType<typeof getClient>>, TError = ErrorType<unknown>>(clientId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getClient>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update a client
 */
export declare const getUpdateClientUrl: (clientId: string) => string;
export declare const updateClient: (clientId: string, updateClientBody: UpdateClientBody, options?: RequestInit) => Promise<Client>;
export declare const getUpdateClientMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateClient>>, TError, {
        clientId: string;
        data: BodyType<UpdateClientBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateClient>>, TError, {
    clientId: string;
    data: BodyType<UpdateClientBody>;
}, TContext>;
export type UpdateClientMutationResult = NonNullable<Awaited<ReturnType<typeof updateClient>>>;
export type UpdateClientMutationBody = BodyType<UpdateClientBody>;
export type UpdateClientMutationError = ErrorType<unknown>;
/**
 * @summary Update a client
 */
export declare const useUpdateClient: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateClient>>, TError, {
        clientId: string;
        data: BodyType<UpdateClientBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateClient>>, TError, {
    clientId: string;
    data: BodyType<UpdateClientBody>;
}, TContext>;
/**
 * @summary Delete a client
 */
export declare const getDeleteClientUrl: (clientId: string) => string;
export declare const deleteClient: (clientId: string, options?: RequestInit) => Promise<void>;
export declare const getDeleteClientMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteClient>>, TError, {
        clientId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteClient>>, TError, {
    clientId: string;
}, TContext>;
export type DeleteClientMutationResult = NonNullable<Awaited<ReturnType<typeof deleteClient>>>;
export type DeleteClientMutationError = ErrorType<unknown>;
/**
 * @summary Delete a client
 */
export declare const useDeleteClient: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteClient>>, TError, {
        clientId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteClient>>, TError, {
    clientId: string;
}, TContext>;
/**
 * @summary Get brand DNA for a client
 */
export declare const getGetBrandDnaUrl: (clientId: string) => string;
export declare const getBrandDna: (clientId: string, options?: RequestInit) => Promise<BrandDna>;
export declare const getGetBrandDnaQueryKey: (clientId: string) => readonly [`/api/clients/${string}/brand-dna`];
export declare const getGetBrandDnaQueryOptions: <TData = Awaited<ReturnType<typeof getBrandDna>>, TError = ErrorType<unknown>>(clientId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getBrandDna>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getBrandDna>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetBrandDnaQueryResult = NonNullable<Awaited<ReturnType<typeof getBrandDna>>>;
export type GetBrandDnaQueryError = ErrorType<unknown>;
/**
 * @summary Get brand DNA for a client
 */
export declare function useGetBrandDna<TData = Awaited<ReturnType<typeof getBrandDna>>, TError = ErrorType<unknown>>(clientId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getBrandDna>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create or update brand DNA for a client
 */
export declare const getUpsertBrandDnaUrl: (clientId: string) => string;
export declare const upsertBrandDna: (clientId: string, upsertBrandDnaBody: UpsertBrandDnaBody, options?: RequestInit) => Promise<BrandDna>;
export declare const getUpsertBrandDnaMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof upsertBrandDna>>, TError, {
        clientId: string;
        data: BodyType<UpsertBrandDnaBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof upsertBrandDna>>, TError, {
    clientId: string;
    data: BodyType<UpsertBrandDnaBody>;
}, TContext>;
export type UpsertBrandDnaMutationResult = NonNullable<Awaited<ReturnType<typeof upsertBrandDna>>>;
export type UpsertBrandDnaMutationBody = BodyType<UpsertBrandDnaBody>;
export type UpsertBrandDnaMutationError = ErrorType<unknown>;
/**
 * @summary Create or update brand DNA for a client
 */
export declare const useUpsertBrandDna: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof upsertBrandDna>>, TError, {
        clientId: string;
        data: BodyType<UpsertBrandDnaBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof upsertBrandDna>>, TError, {
    clientId: string;
    data: BodyType<UpsertBrandDnaBody>;
}, TContext>;
/**
 * @summary List brand assets for a client
 */
export declare const getListBrandAssetsUrl: (clientId: string) => string;
export declare const listBrandAssets: (clientId: string, options?: RequestInit) => Promise<BrandAsset[]>;
export declare const getListBrandAssetsQueryKey: (clientId: string) => readonly [`/api/clients/${string}/brand-assets`];
export declare const getListBrandAssetsQueryOptions: <TData = Awaited<ReturnType<typeof listBrandAssets>>, TError = ErrorType<unknown>>(clientId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listBrandAssets>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listBrandAssets>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListBrandAssetsQueryResult = NonNullable<Awaited<ReturnType<typeof listBrandAssets>>>;
export type ListBrandAssetsQueryError = ErrorType<unknown>;
/**
 * @summary List brand assets for a client
 */
export declare function useListBrandAssets<TData = Awaited<ReturnType<typeof listBrandAssets>>, TError = ErrorType<unknown>>(clientId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listBrandAssets>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Delete a brand asset
 */
export declare const getDeleteBrandAssetUrl: (clientId: string, assetId: string) => string;
export declare const deleteBrandAsset: (clientId: string, assetId: string, options?: RequestInit) => Promise<void>;
export declare const getDeleteBrandAssetMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteBrandAsset>>, TError, {
        clientId: string;
        assetId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteBrandAsset>>, TError, {
    clientId: string;
    assetId: string;
}, TContext>;
export type DeleteBrandAssetMutationResult = NonNullable<Awaited<ReturnType<typeof deleteBrandAsset>>>;
export type DeleteBrandAssetMutationError = ErrorType<unknown>;
/**
 * @summary Delete a brand asset
 */
export declare const useDeleteBrandAsset: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteBrandAsset>>, TError, {
        clientId: string;
        assetId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteBrandAsset>>, TError, {
    clientId: string;
    assetId: string;
}, TContext>;
/**
 * @summary Upload client logo to Supabase Storage
 */
export declare const getUploadClientLogoUrl: (clientId: string) => string;
export declare const uploadClientLogo: (clientId: string, uploadClientLogoBody: UploadClientLogoBody, options?: RequestInit) => Promise<UploadResult>;
export declare const getUploadClientLogoMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof uploadClientLogo>>, TError, {
        clientId: string;
        data: BodyType<UploadClientLogoBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof uploadClientLogo>>, TError, {
    clientId: string;
    data: BodyType<UploadClientLogoBody>;
}, TContext>;
export type UploadClientLogoMutationResult = NonNullable<Awaited<ReturnType<typeof uploadClientLogo>>>;
export type UploadClientLogoMutationBody = BodyType<UploadClientLogoBody>;
export type UploadClientLogoMutationError = ErrorType<unknown>;
/**
 * @summary Upload client logo to Supabase Storage
 */
export declare const useUploadClientLogo: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof uploadClientLogo>>, TError, {
        clientId: string;
        data: BodyType<UploadClientLogoBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof uploadClientLogo>>, TError, {
    clientId: string;
    data: BodyType<UploadClientLogoBody>;
}, TContext>;
/**
 * @summary Upload a brand asset to Supabase Storage
 */
export declare const getUploadBrandAssetUrl: (clientId: string) => string;
export declare const uploadBrandAsset: (clientId: string, uploadBrandAssetBody: UploadBrandAssetBody, options?: RequestInit) => Promise<BrandAsset>;
export declare const getUploadBrandAssetMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof uploadBrandAsset>>, TError, {
        clientId: string;
        data: BodyType<UploadBrandAssetBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof uploadBrandAsset>>, TError, {
    clientId: string;
    data: BodyType<UploadBrandAssetBody>;
}, TContext>;
export type UploadBrandAssetMutationResult = NonNullable<Awaited<ReturnType<typeof uploadBrandAsset>>>;
export type UploadBrandAssetMutationBody = BodyType<UploadBrandAssetBody>;
export type UploadBrandAssetMutationError = ErrorType<unknown>;
/**
 * @summary Upload a brand asset to Supabase Storage
 */
export declare const useUploadBrandAsset: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof uploadBrandAsset>>, TError, {
        clientId: string;
        data: BodyType<UploadBrandAssetBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof uploadBrandAsset>>, TError, {
    clientId: string;
    data: BodyType<UploadBrandAssetBody>;
}, TContext>;
/**
 * @summary Upload an image for a post to Supabase Storage
 */
export declare const getUploadPostImageUrl: (clientId: string) => string;
export declare const uploadPostImage: (clientId: string, uploadPostImageBody: UploadPostImageBody, options?: RequestInit) => Promise<UploadResult>;
export declare const getUploadPostImageMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof uploadPostImage>>, TError, {
        clientId: string;
        data: BodyType<UploadPostImageBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof uploadPostImage>>, TError, {
    clientId: string;
    data: BodyType<UploadPostImageBody>;
}, TContext>;
export type UploadPostImageMutationResult = NonNullable<Awaited<ReturnType<typeof uploadPostImage>>>;
export type UploadPostImageMutationBody = BodyType<UploadPostImageBody>;
export type UploadPostImageMutationError = ErrorType<unknown>;
/**
 * @summary Upload an image for a post to Supabase Storage
 */
export declare const useUploadPostImage: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof uploadPostImage>>, TError, {
        clientId: string;
        data: BodyType<UploadPostImageBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof uploadPostImage>>, TError, {
    clientId: string;
    data: BodyType<UploadPostImageBody>;
}, TContext>;
/**
 * @summary List storylines for a client
 */
export declare const getListStorylinesUrl: (clientId: string) => string;
export declare const listStorylines: (clientId: string, options?: RequestInit) => Promise<Storyline[]>;
export declare const getListStorylinesQueryKey: (clientId: string) => readonly [`/api/clients/${string}/storylines`];
export declare const getListStorylinesQueryOptions: <TData = Awaited<ReturnType<typeof listStorylines>>, TError = ErrorType<unknown>>(clientId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listStorylines>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listStorylines>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListStorylinesQueryResult = NonNullable<Awaited<ReturnType<typeof listStorylines>>>;
export type ListStorylinesQueryError = ErrorType<unknown>;
/**
 * @summary List storylines for a client
 */
export declare function useListStorylines<TData = Awaited<ReturnType<typeof listStorylines>>, TError = ErrorType<unknown>>(clientId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listStorylines>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create a storyline
 */
export declare const getCreateStorylineUrl: (clientId: string) => string;
export declare const createStoryline: (clientId: string, createStorylineBody: CreateStorylineBody, options?: RequestInit) => Promise<Storyline>;
export declare const getCreateStorylineMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createStoryline>>, TError, {
        clientId: string;
        data: BodyType<CreateStorylineBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createStoryline>>, TError, {
    clientId: string;
    data: BodyType<CreateStorylineBody>;
}, TContext>;
export type CreateStorylineMutationResult = NonNullable<Awaited<ReturnType<typeof createStoryline>>>;
export type CreateStorylineMutationBody = BodyType<CreateStorylineBody>;
export type CreateStorylineMutationError = ErrorType<unknown>;
/**
 * @summary Create a storyline
 */
export declare const useCreateStoryline: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createStoryline>>, TError, {
        clientId: string;
        data: BodyType<CreateStorylineBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createStoryline>>, TError, {
    clientId: string;
    data: BodyType<CreateStorylineBody>;
}, TContext>;
/**
 * @summary Update a storyline
 */
export declare const getUpdateStorylineUrl: (clientId: string, storylineId: string) => string;
export declare const updateStoryline: (clientId: string, storylineId: string, updateStorylineBody: UpdateStorylineBody, options?: RequestInit) => Promise<Storyline>;
export declare const getUpdateStorylineMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateStoryline>>, TError, {
        clientId: string;
        storylineId: string;
        data: BodyType<UpdateStorylineBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateStoryline>>, TError, {
    clientId: string;
    storylineId: string;
    data: BodyType<UpdateStorylineBody>;
}, TContext>;
export type UpdateStorylineMutationResult = NonNullable<Awaited<ReturnType<typeof updateStoryline>>>;
export type UpdateStorylineMutationBody = BodyType<UpdateStorylineBody>;
export type UpdateStorylineMutationError = ErrorType<unknown>;
/**
 * @summary Update a storyline
 */
export declare const useUpdateStoryline: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateStoryline>>, TError, {
        clientId: string;
        storylineId: string;
        data: BodyType<UpdateStorylineBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateStoryline>>, TError, {
    clientId: string;
    storylineId: string;
    data: BodyType<UpdateStorylineBody>;
}, TContext>;
/**
 * @summary Delete a storyline
 */
export declare const getDeleteStorylineUrl: (clientId: string, storylineId: string) => string;
export declare const deleteStoryline: (clientId: string, storylineId: string, options?: RequestInit) => Promise<void>;
export declare const getDeleteStorylineMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteStoryline>>, TError, {
        clientId: string;
        storylineId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteStoryline>>, TError, {
    clientId: string;
    storylineId: string;
}, TContext>;
export type DeleteStorylineMutationResult = NonNullable<Awaited<ReturnType<typeof deleteStoryline>>>;
export type DeleteStorylineMutationError = ErrorType<unknown>;
/**
 * @summary Delete a storyline
 */
export declare const useDeleteStoryline: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteStoryline>>, TError, {
        clientId: string;
        storylineId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteStoryline>>, TError, {
    clientId: string;
    storylineId: string;
}, TContext>;
/**
 * @summary List posts for a client
 */
export declare const getListPostsUrl: (clientId: string, params?: ListPostsParams) => string;
export declare const listPosts: (clientId: string, params?: ListPostsParams, options?: RequestInit) => Promise<Post[]>;
export declare const getListPostsQueryKey: (clientId: string, params?: ListPostsParams) => readonly [`/api/clients/${string}/posts`, ...ListPostsParams[]];
export declare const getListPostsQueryOptions: <TData = Awaited<ReturnType<typeof listPosts>>, TError = ErrorType<unknown>>(clientId: string, params?: ListPostsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listPosts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listPosts>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListPostsQueryResult = NonNullable<Awaited<ReturnType<typeof listPosts>>>;
export type ListPostsQueryError = ErrorType<unknown>;
/**
 * @summary List posts for a client
 */
export declare function useListPosts<TData = Awaited<ReturnType<typeof listPosts>>, TError = ErrorType<unknown>>(clientId: string, params?: ListPostsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listPosts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create a post (save draft)
 */
export declare const getCreatePostUrl: (clientId: string) => string;
export declare const createPost: (clientId: string, createPostBody: CreatePostBody, options?: RequestInit) => Promise<Post>;
export declare const getCreatePostMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createPost>>, TError, {
        clientId: string;
        data: BodyType<CreatePostBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createPost>>, TError, {
    clientId: string;
    data: BodyType<CreatePostBody>;
}, TContext>;
export type CreatePostMutationResult = NonNullable<Awaited<ReturnType<typeof createPost>>>;
export type CreatePostMutationBody = BodyType<CreatePostBody>;
export type CreatePostMutationError = ErrorType<unknown>;
/**
 * @summary Create a post (save draft)
 */
export declare const useCreatePost: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createPost>>, TError, {
        clientId: string;
        data: BodyType<CreatePostBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createPost>>, TError, {
    clientId: string;
    data: BodyType<CreatePostBody>;
}, TContext>;
/**
 * @summary Get a post
 */
export declare const getGetPostUrl: (clientId: string, postId: string) => string;
export declare const getPost: (clientId: string, postId: string, options?: RequestInit) => Promise<Post>;
export declare const getGetPostQueryKey: (clientId: string, postId: string) => readonly [`/api/clients/${string}/posts/${string}`];
export declare const getGetPostQueryOptions: <TData = Awaited<ReturnType<typeof getPost>>, TError = ErrorType<unknown>>(clientId: string, postId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPost>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getPost>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetPostQueryResult = NonNullable<Awaited<ReturnType<typeof getPost>>>;
export type GetPostQueryError = ErrorType<unknown>;
/**
 * @summary Get a post
 */
export declare function useGetPost<TData = Awaited<ReturnType<typeof getPost>>, TError = ErrorType<unknown>>(clientId: string, postId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPost>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update a post
 */
export declare const getUpdatePostUrl: (clientId: string, postId: string) => string;
export declare const updatePost: (clientId: string, postId: string, updatePostBody: UpdatePostBody, options?: RequestInit) => Promise<Post>;
export declare const getUpdatePostMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updatePost>>, TError, {
        clientId: string;
        postId: string;
        data: BodyType<UpdatePostBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updatePost>>, TError, {
    clientId: string;
    postId: string;
    data: BodyType<UpdatePostBody>;
}, TContext>;
export type UpdatePostMutationResult = NonNullable<Awaited<ReturnType<typeof updatePost>>>;
export type UpdatePostMutationBody = BodyType<UpdatePostBody>;
export type UpdatePostMutationError = ErrorType<unknown>;
/**
 * @summary Update a post
 */
export declare const useUpdatePost: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updatePost>>, TError, {
        clientId: string;
        postId: string;
        data: BodyType<UpdatePostBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updatePost>>, TError, {
    clientId: string;
    postId: string;
    data: BodyType<UpdatePostBody>;
}, TContext>;
/**
 * @summary Delete a post
 */
export declare const getDeletePostUrl: (clientId: string, postId: string) => string;
export declare const deletePost: (clientId: string, postId: string, options?: RequestInit) => Promise<void>;
export declare const getDeletePostMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deletePost>>, TError, {
        clientId: string;
        postId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deletePost>>, TError, {
    clientId: string;
    postId: string;
}, TContext>;
export type DeletePostMutationResult = NonNullable<Awaited<ReturnType<typeof deletePost>>>;
export type DeletePostMutationError = ErrorType<unknown>;
/**
 * @summary Delete a post
 */
export declare const useDeletePost: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deletePost>>, TError, {
        clientId: string;
        postId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deletePost>>, TError, {
    clientId: string;
    postId: string;
}, TContext>;
/**
 * @summary Publish an approved post to its target social platform
 */
export declare const getPublishPostUrl: (clientId: string, postId: string) => string;
export declare const publishPost: (clientId: string, postId: string, options?: RequestInit) => Promise<Post>;
export declare const getPublishPostMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof publishPost>>, TError, {
        clientId: string;
        postId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof publishPost>>, TError, {
    clientId: string;
    postId: string;
}, TContext>;
export type PublishPostMutationResult = NonNullable<Awaited<ReturnType<typeof publishPost>>>;
export type PublishPostMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Publish an approved post to its target social platform
 */
export declare const usePublishPost: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof publishPost>>, TError, {
        clientId: string;
        postId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof publishPost>>, TError, {
    clientId: string;
    postId: string;
}, TContext>;
/**
 * @summary Approve a draft post
 */
export declare const getApprovePostUrl: (clientId: string, postId: string) => string;
export declare const approvePost: (clientId: string, postId: string, approvePostBody: ApprovePostBody, options?: RequestInit) => Promise<Post>;
export declare const getApprovePostMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof approvePost>>, TError, {
        clientId: string;
        postId: string;
        data: BodyType<ApprovePostBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof approvePost>>, TError, {
    clientId: string;
    postId: string;
    data: BodyType<ApprovePostBody>;
}, TContext>;
export type ApprovePostMutationResult = NonNullable<Awaited<ReturnType<typeof approvePost>>>;
export type ApprovePostMutationBody = BodyType<ApprovePostBody>;
export type ApprovePostMutationError = ErrorType<unknown>;
/**
 * @summary Approve a draft post
 */
export declare const useApprovePost: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof approvePost>>, TError, {
        clientId: string;
        postId: string;
        data: BodyType<ApprovePostBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof approvePost>>, TError, {
    clientId: string;
    postId: string;
    data: BodyType<ApprovePostBody>;
}, TContext>;
/**
 * @summary Reject a draft post
 */
export declare const getRejectPostUrl: (clientId: string, postId: string) => string;
export declare const rejectPost: (clientId: string, postId: string, options?: RequestInit) => Promise<Post>;
export declare const getRejectPostMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof rejectPost>>, TError, {
        clientId: string;
        postId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof rejectPost>>, TError, {
    clientId: string;
    postId: string;
}, TContext>;
export type RejectPostMutationResult = NonNullable<Awaited<ReturnType<typeof rejectPost>>>;
export type RejectPostMutationError = ErrorType<unknown>;
/**
 * @summary Reject a draft post
 */
export declare const useRejectPost: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof rejectPost>>, TError, {
        clientId: string;
        postId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof rejectPost>>, TError, {
    clientId: string;
    postId: string;
}, TContext>;
/**
 * @summary Bulk approve multiple draft posts
 */
export declare const getBulkApprovePostsUrl: (clientId: string) => string;
export declare const bulkApprovePosts: (clientId: string, bulkApproveBody: BulkApproveBody, options?: RequestInit) => Promise<BulkApproveResponse>;
export declare const getBulkApprovePostsMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof bulkApprovePosts>>, TError, {
        clientId: string;
        data: BodyType<BulkApproveBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof bulkApprovePosts>>, TError, {
    clientId: string;
    data: BodyType<BulkApproveBody>;
}, TContext>;
export type BulkApprovePostsMutationResult = NonNullable<Awaited<ReturnType<typeof bulkApprovePosts>>>;
export type BulkApprovePostsMutationBody = BodyType<BulkApproveBody>;
export type BulkApprovePostsMutationError = ErrorType<unknown>;
/**
 * @summary Bulk approve multiple draft posts
 */
export declare const useBulkApprovePosts: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof bulkApprovePosts>>, TError, {
        clientId: string;
        data: BodyType<BulkApproveBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof bulkApprovePosts>>, TError, {
    clientId: string;
    data: BodyType<BulkApproveBody>;
}, TContext>;
/**
 * @summary Auto-schedule draft posts across upcoming time slots
 */
export declare const getAutoSchedulePostsUrl: (clientId: string) => string;
export declare const autoSchedulePosts: (clientId: string, autoScheduleBody: AutoScheduleBody, options?: RequestInit) => Promise<AutoScheduleResponse>;
export declare const getAutoSchedulePostsMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof autoSchedulePosts>>, TError, {
        clientId: string;
        data: BodyType<AutoScheduleBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof autoSchedulePosts>>, TError, {
    clientId: string;
    data: BodyType<AutoScheduleBody>;
}, TContext>;
export type AutoSchedulePostsMutationResult = NonNullable<Awaited<ReturnType<typeof autoSchedulePosts>>>;
export type AutoSchedulePostsMutationBody = BodyType<AutoScheduleBody>;
export type AutoSchedulePostsMutationError = ErrorType<unknown>;
/**
 * @summary Auto-schedule draft posts across upcoming time slots
 */
export declare const useAutoSchedulePosts: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof autoSchedulePosts>>, TError, {
        clientId: string;
        data: BodyType<AutoScheduleBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof autoSchedulePosts>>, TError, {
    clientId: string;
    data: BodyType<AutoScheduleBody>;
}, TContext>;
/**
 * @summary Get posting rules for a client
 */
export declare const getGetPostingRulesUrl: (clientId: string) => string;
export declare const getPostingRules: (clientId: string, options?: RequestInit) => Promise<PostingRules>;
export declare const getGetPostingRulesQueryKey: (clientId: string) => readonly [`/api/clients/${string}/posting-rules`];
export declare const getGetPostingRulesQueryOptions: <TData = Awaited<ReturnType<typeof getPostingRules>>, TError = ErrorType<unknown>>(clientId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPostingRules>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getPostingRules>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetPostingRulesQueryResult = NonNullable<Awaited<ReturnType<typeof getPostingRules>>>;
export type GetPostingRulesQueryError = ErrorType<unknown>;
/**
 * @summary Get posting rules for a client
 */
export declare function useGetPostingRules<TData = Awaited<ReturnType<typeof getPostingRules>>, TError = ErrorType<unknown>>(clientId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPostingRules>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create or update posting rules for a client
 */
export declare const getUpsertPostingRulesUrl: (clientId: string) => string;
export declare const upsertPostingRules: (clientId: string, upsertPostingRulesBody: UpsertPostingRulesBody, options?: RequestInit) => Promise<PostingRules>;
export declare const getUpsertPostingRulesMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof upsertPostingRules>>, TError, {
        clientId: string;
        data: BodyType<UpsertPostingRulesBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof upsertPostingRules>>, TError, {
    clientId: string;
    data: BodyType<UpsertPostingRulesBody>;
}, TContext>;
export type UpsertPostingRulesMutationResult = NonNullable<Awaited<ReturnType<typeof upsertPostingRules>>>;
export type UpsertPostingRulesMutationBody = BodyType<UpsertPostingRulesBody>;
export type UpsertPostingRulesMutationError = ErrorType<unknown>;
/**
 * @summary Create or update posting rules for a client
 */
export declare const useUpsertPostingRules: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof upsertPostingRules>>, TError, {
        clientId: string;
        data: BodyType<UpsertPostingRulesBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof upsertPostingRules>>, TError, {
    clientId: string;
    data: BodyType<UpsertPostingRulesBody>;
}, TContext>;
/**
 * @summary Export approved posts as Postiz-compatible JSON
 */
export declare const getExportPostsUrl: (clientId: string) => string;
export declare const exportPosts: (clientId: string, options?: RequestInit) => Promise<PostizExport>;
export declare const getExportPostsQueryKey: (clientId: string) => readonly [`/api/clients/${string}/posts/export`];
export declare const getExportPostsQueryOptions: <TData = Awaited<ReturnType<typeof exportPosts>>, TError = ErrorType<unknown>>(clientId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof exportPosts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof exportPosts>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ExportPostsQueryResult = NonNullable<Awaited<ReturnType<typeof exportPosts>>>;
export type ExportPostsQueryError = ErrorType<unknown>;
/**
 * @summary Export approved posts as Postiz-compatible JSON
 */
export declare function useExportPosts<TData = Awaited<ReturnType<typeof exportPosts>>, TError = ErrorType<unknown>>(clientId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof exportPosts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary List images for a post
 */
export declare const getListPostImagesUrl: (clientId: string, postId: string) => string;
export declare const listPostImages: (clientId: string, postId: string, options?: RequestInit) => Promise<Image[]>;
export declare const getListPostImagesQueryKey: (clientId: string, postId: string) => readonly [`/api/clients/${string}/posts/${string}/images`];
export declare const getListPostImagesQueryOptions: <TData = Awaited<ReturnType<typeof listPostImages>>, TError = ErrorType<unknown>>(clientId: string, postId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listPostImages>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listPostImages>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListPostImagesQueryResult = NonNullable<Awaited<ReturnType<typeof listPostImages>>>;
export type ListPostImagesQueryError = ErrorType<unknown>;
/**
 * @summary List images for a post
 */
export declare function useListPostImages<TData = Awaited<ReturnType<typeof listPostImages>>, TError = ErrorType<unknown>>(clientId: string, postId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listPostImages>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Save an image record
 */
export declare const getSaveImageUrl: (clientId: string, postId: string) => string;
export declare const saveImage: (clientId: string, postId: string, saveImageBody: SaveImageBody, options?: RequestInit) => Promise<Image>;
export declare const getSaveImageMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof saveImage>>, TError, {
        clientId: string;
        postId: string;
        data: BodyType<SaveImageBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof saveImage>>, TError, {
    clientId: string;
    postId: string;
    data: BodyType<SaveImageBody>;
}, TContext>;
export type SaveImageMutationResult = NonNullable<Awaited<ReturnType<typeof saveImage>>>;
export type SaveImageMutationBody = BodyType<SaveImageBody>;
export type SaveImageMutationError = ErrorType<unknown>;
/**
 * @summary Save an image record
 */
export declare const useSaveImage: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof saveImage>>, TError, {
        clientId: string;
        postId: string;
        data: BodyType<SaveImageBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof saveImage>>, TError, {
    clientId: string;
    postId: string;
    data: BodyType<SaveImageBody>;
}, TContext>;
/**
 * @summary List content memory for a client
 */
export declare const getListMemoryUrl: (clientId: string) => string;
export declare const listMemory: (clientId: string, options?: RequestInit) => Promise<MemoryEntry[]>;
export declare const getListMemoryQueryKey: (clientId: string) => readonly [`/api/clients/${string}/memory`];
export declare const getListMemoryQueryOptions: <TData = Awaited<ReturnType<typeof listMemory>>, TError = ErrorType<unknown>>(clientId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listMemory>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listMemory>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListMemoryQueryResult = NonNullable<Awaited<ReturnType<typeof listMemory>>>;
export type ListMemoryQueryError = ErrorType<unknown>;
/**
 * @summary List content memory for a client
 */
export declare function useListMemory<TData = Awaited<ReturnType<typeof listMemory>>, TError = ErrorType<unknown>>(clientId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listMemory>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Add a memory entry
 */
export declare const getAddMemoryUrl: (clientId: string) => string;
export declare const addMemory: (clientId: string, addMemoryBody: AddMemoryBody, options?: RequestInit) => Promise<MemoryEntry>;
export declare const getAddMemoryMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof addMemory>>, TError, {
        clientId: string;
        data: BodyType<AddMemoryBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof addMemory>>, TError, {
    clientId: string;
    data: BodyType<AddMemoryBody>;
}, TContext>;
export type AddMemoryMutationResult = NonNullable<Awaited<ReturnType<typeof addMemory>>>;
export type AddMemoryMutationBody = BodyType<AddMemoryBody>;
export type AddMemoryMutationError = ErrorType<unknown>;
/**
 * @summary Add a memory entry
 */
export declare const useAddMemory: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof addMemory>>, TError, {
        clientId: string;
        data: BodyType<AddMemoryBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof addMemory>>, TError, {
    clientId: string;
    data: BodyType<AddMemoryBody>;
}, TContext>;
/**
 * @summary Delete a memory entry
 */
export declare const getDeleteMemoryUrl: (clientId: string, memoryId: string) => string;
export declare const deleteMemory: (clientId: string, memoryId: string, options?: RequestInit) => Promise<void>;
export declare const getDeleteMemoryMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteMemory>>, TError, {
        clientId: string;
        memoryId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteMemory>>, TError, {
    clientId: string;
    memoryId: string;
}, TContext>;
export type DeleteMemoryMutationResult = NonNullable<Awaited<ReturnType<typeof deleteMemory>>>;
export type DeleteMemoryMutationError = ErrorType<unknown>;
/**
 * @summary Delete a memory entry
 */
export declare const useDeleteMemory: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteMemory>>, TError, {
        clientId: string;
        memoryId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteMemory>>, TError, {
    clientId: string;
    memoryId: string;
}, TContext>;
/**
 * @summary Generate 3 caption options using Claude with full client context
 */
export declare const getGenerateCaptionsUrl: () => string;
export declare const generateCaptions: (generateCaptionsBody: GenerateCaptionsBody, options?: RequestInit) => Promise<GenerateCaptionsResponse>;
export declare const getGenerateCaptionsMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof generateCaptions>>, TError, {
        data: BodyType<GenerateCaptionsBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof generateCaptions>>, TError, {
    data: BodyType<GenerateCaptionsBody>;
}, TContext>;
export type GenerateCaptionsMutationResult = NonNullable<Awaited<ReturnType<typeof generateCaptions>>>;
export type GenerateCaptionsMutationBody = BodyType<GenerateCaptionsBody>;
export type GenerateCaptionsMutationError = ErrorType<unknown>;
/**
 * @summary Generate 3 caption options using Claude with full client context
 */
export declare const useGenerateCaptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof generateCaptions>>, TError, {
        data: BodyType<GenerateCaptionsBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof generateCaptions>>, TError, {
    data: BodyType<GenerateCaptionsBody>;
}, TContext>;
/**
 * @summary Generate two image variations in parallel using DALL-E 3
 */
export declare const getGenerateImagesUrl: () => string;
export declare const generateImages: (generateImagesBody: GenerateImagesBody, options?: RequestInit) => Promise<GenerateImagesResponse>;
export declare const getGenerateImagesMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof generateImages>>, TError, {
        data: BodyType<GenerateImagesBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof generateImages>>, TError, {
    data: BodyType<GenerateImagesBody>;
}, TContext>;
export type GenerateImagesMutationResult = NonNullable<Awaited<ReturnType<typeof generateImages>>>;
export type GenerateImagesMutationBody = BodyType<GenerateImagesBody>;
export type GenerateImagesMutationError = ErrorType<unknown>;
/**
 * @summary Generate two image variations in parallel using DALL-E 3
 */
export declare const useGenerateImages: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof generateImages>>, TError, {
        data: BodyType<GenerateImagesBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof generateImages>>, TError, {
    data: BodyType<GenerateImagesBody>;
}, TContext>;
/**
 * @summary Get dashboard summary for a client
 */
export declare const getGetClientDashboardUrl: (clientId: string) => string;
export declare const getClientDashboard: (clientId: string, options?: RequestInit) => Promise<ClientDashboard>;
export declare const getGetClientDashboardQueryKey: (clientId: string) => readonly [`/api/clients/${string}/dashboard`];
export declare const getGetClientDashboardQueryOptions: <TData = Awaited<ReturnType<typeof getClientDashboard>>, TError = ErrorType<unknown>>(clientId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getClientDashboard>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getClientDashboard>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetClientDashboardQueryResult = NonNullable<Awaited<ReturnType<typeof getClientDashboard>>>;
export type GetClientDashboardQueryError = ErrorType<unknown>;
/**
 * @summary Get dashboard summary for a client
 */
export declare function useGetClientDashboard<TData = Awaited<ReturnType<typeof getClientDashboard>>, TError = ErrorType<unknown>>(clientId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getClientDashboard>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create a new account
 */
export declare const getSignUpUrl: () => string;
export declare const signUp: (authSignupBody: AuthSignupBody, options?: RequestInit) => Promise<AuthResponse>;
export declare const getSignUpMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof signUp>>, TError, {
        data: BodyType<AuthSignupBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof signUp>>, TError, {
    data: BodyType<AuthSignupBody>;
}, TContext>;
export type SignUpMutationResult = NonNullable<Awaited<ReturnType<typeof signUp>>>;
export type SignUpMutationBody = BodyType<AuthSignupBody>;
export type SignUpMutationError = ErrorType<unknown>;
/**
 * @summary Create a new account
 */
export declare const useSignUp: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof signUp>>, TError, {
        data: BodyType<AuthSignupBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof signUp>>, TError, {
    data: BodyType<AuthSignupBody>;
}, TContext>;
/**
 * @summary Sign in with email and password
 */
export declare const getLoginUrl: () => string;
export declare const login: (authLoginBody: AuthLoginBody, options?: RequestInit) => Promise<AuthResponse>;
export declare const getLoginMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, {
        data: BodyType<AuthLoginBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, {
    data: BodyType<AuthLoginBody>;
}, TContext>;
export type LoginMutationResult = NonNullable<Awaited<ReturnType<typeof login>>>;
export type LoginMutationBody = BodyType<AuthLoginBody>;
export type LoginMutationError = ErrorType<unknown>;
/**
 * @summary Sign in with email and password
 */
export declare const useLogin: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, {
        data: BodyType<AuthLoginBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof login>>, TError, {
    data: BodyType<AuthLoginBody>;
}, TContext>;
/**
 * @summary Sign out
 */
export declare const getLogoutUrl: () => string;
export declare const logout: (options?: RequestInit) => Promise<void>;
export declare const getLogoutMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
export type LogoutMutationResult = NonNullable<Awaited<ReturnType<typeof logout>>>;
export type LogoutMutationError = ErrorType<unknown>;
/**
 * @summary Sign out
 */
export declare const useLogout: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
/**
 * @summary Get current user
 */
export declare const getGetMeUrl: () => string;
export declare const getMe: (options?: RequestInit) => Promise<AuthUser>;
export declare const getGetMeQueryKey: () => readonly ["/api/auth/me"];
export declare const getGetMeQueryOptions: <TData = Awaited<ReturnType<typeof getMe>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetMeQueryResult = NonNullable<Awaited<ReturnType<typeof getMe>>>;
export type GetMeQueryError = ErrorType<unknown>;
/**
 * @summary Get current user
 */
export declare function useGetMe<TData = Awaited<ReturnType<typeof getMe>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Refresh access token
 */
export declare const getRefreshTokenUrl: () => string;
export declare const refreshToken: (refreshTokenBody: RefreshTokenBody, options?: RequestInit) => Promise<RefreshToken200>;
export declare const getRefreshTokenMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof refreshToken>>, TError, {
        data: BodyType<RefreshTokenBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof refreshToken>>, TError, {
    data: BodyType<RefreshTokenBody>;
}, TContext>;
export type RefreshTokenMutationResult = NonNullable<Awaited<ReturnType<typeof refreshToken>>>;
export type RefreshTokenMutationBody = BodyType<RefreshTokenBody>;
export type RefreshTokenMutationError = ErrorType<unknown>;
/**
 * @summary Refresh access token
 */
export declare const useRefreshToken: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof refreshToken>>, TError, {
        data: BodyType<RefreshTokenBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof refreshToken>>, TError, {
    data: BodyType<RefreshTokenBody>;
}, TContext>;
/**
 * @summary Get current user settings
 */
export declare const getGetSettingsUrl: () => string;
export declare const getSettings: (options?: RequestInit) => Promise<UserSettings>;
export declare const getGetSettingsQueryKey: () => readonly ["/api/settings"];
export declare const getGetSettingsQueryOptions: <TData = Awaited<ReturnType<typeof getSettings>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSettings>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getSettings>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetSettingsQueryResult = NonNullable<Awaited<ReturnType<typeof getSettings>>>;
export type GetSettingsQueryError = ErrorType<unknown>;
/**
 * @summary Get current user settings
 */
export declare function useGetSettings<TData = Awaited<ReturnType<typeof getSettings>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSettings>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update user settings
 */
export declare const getUpdateSettingsUrl: () => string;
export declare const updateSettings: (updateSettingsBody: UpdateSettingsBody, options?: RequestInit) => Promise<UserSettings>;
export declare const getUpdateSettingsMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateSettings>>, TError, {
        data: BodyType<UpdateSettingsBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateSettings>>, TError, {
    data: BodyType<UpdateSettingsBody>;
}, TContext>;
export type UpdateSettingsMutationResult = NonNullable<Awaited<ReturnType<typeof updateSettings>>>;
export type UpdateSettingsMutationBody = BodyType<UpdateSettingsBody>;
export type UpdateSettingsMutationError = ErrorType<unknown>;
/**
 * @summary Update user settings
 */
export declare const useUpdateSettings: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateSettings>>, TError, {
        data: BodyType<UpdateSettingsBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateSettings>>, TError, {
    data: BodyType<UpdateSettingsBody>;
}, TContext>;
/**
 * @summary List campaigns for a client
 */
export declare const getListCampaignsUrl: (clientId: string) => string;
export declare const listCampaigns: (clientId: string, options?: RequestInit) => Promise<Campaign[]>;
export declare const getListCampaignsQueryKey: (clientId: string) => readonly [`/api/clients/${string}/campaigns`];
export declare const getListCampaignsQueryOptions: <TData = Awaited<ReturnType<typeof listCampaigns>>, TError = ErrorType<unknown>>(clientId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listCampaigns>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listCampaigns>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListCampaignsQueryResult = NonNullable<Awaited<ReturnType<typeof listCampaigns>>>;
export type ListCampaignsQueryError = ErrorType<unknown>;
/**
 * @summary List campaigns for a client
 */
export declare function useListCampaigns<TData = Awaited<ReturnType<typeof listCampaigns>>, TError = ErrorType<unknown>>(clientId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listCampaigns>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create a campaign
 */
export declare const getCreateCampaignUrl: (clientId: string) => string;
export declare const createCampaign: (clientId: string, createCampaignBody: CreateCampaignBody, options?: RequestInit) => Promise<Campaign>;
export declare const getCreateCampaignMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createCampaign>>, TError, {
        clientId: string;
        data: BodyType<CreateCampaignBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createCampaign>>, TError, {
    clientId: string;
    data: BodyType<CreateCampaignBody>;
}, TContext>;
export type CreateCampaignMutationResult = NonNullable<Awaited<ReturnType<typeof createCampaign>>>;
export type CreateCampaignMutationBody = BodyType<CreateCampaignBody>;
export type CreateCampaignMutationError = ErrorType<unknown>;
/**
 * @summary Create a campaign
 */
export declare const useCreateCampaign: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createCampaign>>, TError, {
        clientId: string;
        data: BodyType<CreateCampaignBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createCampaign>>, TError, {
    clientId: string;
    data: BodyType<CreateCampaignBody>;
}, TContext>;
/**
 * @summary Get a campaign with its posts
 */
export declare const getGetCampaignUrl: (clientId: string, campaignId: string) => string;
export declare const getCampaign: (clientId: string, campaignId: string, options?: RequestInit) => Promise<CampaignDetail>;
export declare const getGetCampaignQueryKey: (clientId: string, campaignId: string) => readonly [`/api/clients/${string}/campaigns/${string}`];
export declare const getGetCampaignQueryOptions: <TData = Awaited<ReturnType<typeof getCampaign>>, TError = ErrorType<unknown>>(clientId: string, campaignId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCampaign>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getCampaign>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetCampaignQueryResult = NonNullable<Awaited<ReturnType<typeof getCampaign>>>;
export type GetCampaignQueryError = ErrorType<unknown>;
/**
 * @summary Get a campaign with its posts
 */
export declare function useGetCampaign<TData = Awaited<ReturnType<typeof getCampaign>>, TError = ErrorType<unknown>>(clientId: string, campaignId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCampaign>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update a campaign
 */
export declare const getUpdateCampaignUrl: (clientId: string, campaignId: string) => string;
export declare const updateCampaign: (clientId: string, campaignId: string, updateCampaignBody: UpdateCampaignBody, options?: RequestInit) => Promise<Campaign>;
export declare const getUpdateCampaignMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateCampaign>>, TError, {
        clientId: string;
        campaignId: string;
        data: BodyType<UpdateCampaignBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateCampaign>>, TError, {
    clientId: string;
    campaignId: string;
    data: BodyType<UpdateCampaignBody>;
}, TContext>;
export type UpdateCampaignMutationResult = NonNullable<Awaited<ReturnType<typeof updateCampaign>>>;
export type UpdateCampaignMutationBody = BodyType<UpdateCampaignBody>;
export type UpdateCampaignMutationError = ErrorType<unknown>;
/**
 * @summary Update a campaign
 */
export declare const useUpdateCampaign: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateCampaign>>, TError, {
        clientId: string;
        campaignId: string;
        data: BodyType<UpdateCampaignBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateCampaign>>, TError, {
    clientId: string;
    campaignId: string;
    data: BodyType<UpdateCampaignBody>;
}, TContext>;
/**
 * @summary Delete a campaign
 */
export declare const getDeleteCampaignUrl: (clientId: string, campaignId: string) => string;
export declare const deleteCampaign: (clientId: string, campaignId: string, options?: RequestInit) => Promise<void>;
export declare const getDeleteCampaignMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteCampaign>>, TError, {
        clientId: string;
        campaignId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteCampaign>>, TError, {
    clientId: string;
    campaignId: string;
}, TContext>;
export type DeleteCampaignMutationResult = NonNullable<Awaited<ReturnType<typeof deleteCampaign>>>;
export type DeleteCampaignMutationError = ErrorType<unknown>;
/**
 * @summary Delete a campaign
 */
export declare const useDeleteCampaign: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteCampaign>>, TError, {
        clientId: string;
        campaignId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteCampaign>>, TError, {
    clientId: string;
    campaignId: string;
}, TContext>;
/**
 * @summary List connected social accounts for a client
 */
export declare const getListSocialAccountsUrl: (clientId: string) => string;
export declare const listSocialAccounts: (clientId: string, options?: RequestInit) => Promise<SocialAccount[]>;
export declare const getListSocialAccountsQueryKey: (clientId: string) => readonly [`/api/clients/${string}/social-accounts`];
export declare const getListSocialAccountsQueryOptions: <TData = Awaited<ReturnType<typeof listSocialAccounts>>, TError = ErrorType<unknown>>(clientId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listSocialAccounts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listSocialAccounts>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListSocialAccountsQueryResult = NonNullable<Awaited<ReturnType<typeof listSocialAccounts>>>;
export type ListSocialAccountsQueryError = ErrorType<unknown>;
/**
 * @summary List connected social accounts for a client
 */
export declare function useListSocialAccounts<TData = Awaited<ReturnType<typeof listSocialAccounts>>, TError = ErrorType<unknown>>(clientId: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listSocialAccounts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Connect a social media account
 */
export declare const getConnectSocialAccountUrl: (clientId: string) => string;
export declare const connectSocialAccount: (clientId: string, connectSocialAccountBody: ConnectSocialAccountBody, options?: RequestInit) => Promise<SocialAccount>;
export declare const getConnectSocialAccountMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof connectSocialAccount>>, TError, {
        clientId: string;
        data: BodyType<ConnectSocialAccountBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof connectSocialAccount>>, TError, {
    clientId: string;
    data: BodyType<ConnectSocialAccountBody>;
}, TContext>;
export type ConnectSocialAccountMutationResult = NonNullable<Awaited<ReturnType<typeof connectSocialAccount>>>;
export type ConnectSocialAccountMutationBody = BodyType<ConnectSocialAccountBody>;
export type ConnectSocialAccountMutationError = ErrorType<unknown>;
/**
 * @summary Connect a social media account
 */
export declare const useConnectSocialAccount: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof connectSocialAccount>>, TError, {
        clientId: string;
        data: BodyType<ConnectSocialAccountBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof connectSocialAccount>>, TError, {
    clientId: string;
    data: BodyType<ConnectSocialAccountBody>;
}, TContext>;
/**
 * @summary Update a social account
 */
export declare const getUpdateSocialAccountUrl: (clientId: string, accountId: string) => string;
export declare const updateSocialAccount: (clientId: string, accountId: string, updateSocialAccountBody: UpdateSocialAccountBody, options?: RequestInit) => Promise<SocialAccount>;
export declare const getUpdateSocialAccountMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateSocialAccount>>, TError, {
        clientId: string;
        accountId: string;
        data: BodyType<UpdateSocialAccountBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateSocialAccount>>, TError, {
    clientId: string;
    accountId: string;
    data: BodyType<UpdateSocialAccountBody>;
}, TContext>;
export type UpdateSocialAccountMutationResult = NonNullable<Awaited<ReturnType<typeof updateSocialAccount>>>;
export type UpdateSocialAccountMutationBody = BodyType<UpdateSocialAccountBody>;
export type UpdateSocialAccountMutationError = ErrorType<unknown>;
/**
 * @summary Update a social account
 */
export declare const useUpdateSocialAccount: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateSocialAccount>>, TError, {
        clientId: string;
        accountId: string;
        data: BodyType<UpdateSocialAccountBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateSocialAccount>>, TError, {
    clientId: string;
    accountId: string;
    data: BodyType<UpdateSocialAccountBody>;
}, TContext>;
/**
 * @summary Disconnect a social media account
 */
export declare const getDisconnectSocialAccountUrl: (clientId: string, accountId: string) => string;
export declare const disconnectSocialAccount: (clientId: string, accountId: string, options?: RequestInit) => Promise<void>;
export declare const getDisconnectSocialAccountMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof disconnectSocialAccount>>, TError, {
        clientId: string;
        accountId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof disconnectSocialAccount>>, TError, {
    clientId: string;
    accountId: string;
}, TContext>;
export type DisconnectSocialAccountMutationResult = NonNullable<Awaited<ReturnType<typeof disconnectSocialAccount>>>;
export type DisconnectSocialAccountMutationError = ErrorType<unknown>;
/**
 * @summary Disconnect a social media account
 */
export declare const useDisconnectSocialAccount: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof disconnectSocialAccount>>, TError, {
        clientId: string;
        accountId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof disconnectSocialAccount>>, TError, {
    clientId: string;
    accountId: string;
}, TContext>;
/**
 * @summary Get AI-powered content suggestions for a client
 */
export declare const getGetContentSuggestionsUrl: (clientId: string) => string;
export declare const getContentSuggestions: (clientId: string, options?: RequestInit) => Promise<ContentSuggestionsResponse>;
export declare const getGetContentSuggestionsMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof getContentSuggestions>>, TError, {
        clientId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof getContentSuggestions>>, TError, {
    clientId: string;
}, TContext>;
export type GetContentSuggestionsMutationResult = NonNullable<Awaited<ReturnType<typeof getContentSuggestions>>>;
export type GetContentSuggestionsMutationError = ErrorType<unknown>;
/**
 * @summary Get AI-powered content suggestions for a client
 */
export declare const useGetContentSuggestions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof getContentSuggestions>>, TError, {
        clientId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof getContentSuggestions>>, TError, {
    clientId: string;
}, TContext>;
/**
 * @summary Generate an AI content plan for a campaign (creates post drafts)
 */
export declare const getGenerateCampaignPlanUrl: (clientId: string, campaignId: string) => string;
export declare const generateCampaignPlan: (clientId: string, campaignId: string, generatePlanBody: GeneratePlanBody, options?: RequestInit) => Promise<GeneratePlanResponse>;
export declare const getGenerateCampaignPlanMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof generateCampaignPlan>>, TError, {
        clientId: string;
        campaignId: string;
        data: BodyType<GeneratePlanBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof generateCampaignPlan>>, TError, {
    clientId: string;
    campaignId: string;
    data: BodyType<GeneratePlanBody>;
}, TContext>;
export type GenerateCampaignPlanMutationResult = NonNullable<Awaited<ReturnType<typeof generateCampaignPlan>>>;
export type GenerateCampaignPlanMutationBody = BodyType<GeneratePlanBody>;
export type GenerateCampaignPlanMutationError = ErrorType<unknown>;
/**
 * @summary Generate an AI content plan for a campaign (creates post drafts)
 */
export declare const useGenerateCampaignPlan: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof generateCampaignPlan>>, TError, {
        clientId: string;
        campaignId: string;
        data: BodyType<GeneratePlanBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof generateCampaignPlan>>, TError, {
    clientId: string;
    campaignId: string;
    data: BodyType<GeneratePlanBody>;
}, TContext>;
/**
 * @summary Regenerate AI caption and hashtags for an existing post
 */
export declare const getRegeneratePostCopyUrl: (clientId: string, postId: string) => string;
export declare const regeneratePostCopy: (clientId: string, postId: string, options?: RequestInit) => Promise<Post>;
export declare const getRegeneratePostCopyMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof regeneratePostCopy>>, TError, {
        clientId: string;
        postId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof regeneratePostCopy>>, TError, {
    clientId: string;
    postId: string;
}, TContext>;
export type RegeneratePostCopyMutationResult = NonNullable<Awaited<ReturnType<typeof regeneratePostCopy>>>;
export type RegeneratePostCopyMutationError = ErrorType<unknown>;
/**
 * @summary Regenerate AI caption and hashtags for an existing post
 */
export declare const useRegeneratePostCopy: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof regeneratePostCopy>>, TError, {
        clientId: string;
        postId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof regeneratePostCopy>>, TError, {
    clientId: string;
    postId: string;
}, TContext>;
/**
 * @summary Generate a DALL-E image for a post and save it
 */
export declare const getGeneratePostImageUrl: (clientId: string, postId: string) => string;
export declare const generatePostImage: (clientId: string, postId: string, options?: RequestInit) => Promise<Post>;
export declare const getGeneratePostImageMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof generatePostImage>>, TError, {
        clientId: string;
        postId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof generatePostImage>>, TError, {
    clientId: string;
    postId: string;
}, TContext>;
export type GeneratePostImageMutationResult = NonNullable<Awaited<ReturnType<typeof generatePostImage>>>;
export type GeneratePostImageMutationError = ErrorType<unknown>;
/**
 * @summary Generate a DALL-E image for a post and save it
 */
export declare const useGeneratePostImage: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof generatePostImage>>, TError, {
        clientId: string;
        postId: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof generatePostImage>>, TError, {
    clientId: string;
    postId: string;
}, TContext>;
/**
 * @summary Bulk-generate a full week or month of content for a brand
 */
export declare const getBulkGeneratePostsUrl: (clientId: string) => string;
export declare const bulkGeneratePosts: (clientId: string, bulkGenerateBody: BulkGenerateBody, options?: RequestInit) => Promise<BulkGenerateResponse>;
export declare const getBulkGeneratePostsMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof bulkGeneratePosts>>, TError, {
        clientId: string;
        data: BodyType<BulkGenerateBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof bulkGeneratePosts>>, TError, {
    clientId: string;
    data: BodyType<BulkGenerateBody>;
}, TContext>;
export type BulkGeneratePostsMutationResult = NonNullable<Awaited<ReturnType<typeof bulkGeneratePosts>>>;
export type BulkGeneratePostsMutationBody = BodyType<BulkGenerateBody>;
export type BulkGeneratePostsMutationError = ErrorType<unknown>;
/**
 * @summary Bulk-generate a full week or month of content for a brand
 */
export declare const useBulkGeneratePosts: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof bulkGeneratePosts>>, TError, {
        clientId: string;
        data: BodyType<BulkGenerateBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof bulkGeneratePosts>>, TError, {
    clientId: string;
    data: BodyType<BulkGenerateBody>;
}, TContext>;
export {};
//# sourceMappingURL=api.d.ts.map